import axios from 'axios';

interface IselectDTO {
  value: string;
  id: string;
}

interface IFilter {
  seller?: string,
  country?: string
}

interface ItopSellerDTO {
  name: string;
  value: string;
}

interface ImetaDTO {
  previous: number;
  current: number;
  next: number;
  limit: number;
  count: number;
}

interface IrecordDTO {
  orderId: number;
  product: string;
  seller: string;
  country: string;
  price: number;
}

interface IsellerDTO {
  records: IrecordDTO[];
  meta: ImetaDTO;
}

class sellerService {
  private static topSellerDto: ItopSellerDTO[] = [];

  static async getPage(afterCursor?: string, beforeCursor?: string, filter?: IFilter): Promise<IsellerDTO> {
    let url: string = 'http://localhost:3333/order';

    const queryPages: IsellerDTO = {
      records: [],
      meta: null
    }

    if (filter) {
      queryPages.records = sellerService.getFiltered(queryPages.records, filter)
    }

    if (afterCursor) {
      url = url + '?after=' + afterCursor
    }

    if (beforeCursor) {
      url = url + '?before=' + beforeCursor
    }
    console.log("URL");
    console.log(url);
    const orders = await axios.get(url).then((res) => res.data)
    console.log("ORDERS", orders.data);
    if (orders.data) {
      for (const order of orders.data) {
        queryPages.records.push({
          orderId: order.id,
          product: order.product,
          price: order.price,
          seller: order.sellerName,
          country: order.countryName,
        })     
      }
    }

    queryPages.meta = orders.meta
    return queryPages;
  }

  static async getSellers(): Promise<ItopSellerDTO[]> {
    let url: string = 'http://localhost:3333/seller';
    const sellers = await axios.get(url).then((res) => res.data)
    console.log(sellers);


    if (sellers) {
      for (const seller of sellers) {
        console.log(seller);
        sellerService.topSellerDto.push({
          name: seller.name,
          value: seller.totalSeller
        })     
      }
    }
    console.log(sellerService.topSellerDto);

    return sellerService.topSellerDto
  }

  static async getSellectSeller(): Promise<IselectDTO[]> {
    const seller: IselectDTO[] = [
      { value: 'Seller 01', id: '1' },
      { value: 'Seller 02', id: '2'},
      { value: 'Seller 03', id: '3' }
    ]
    return seller
  }

  static async getSellectCountries(): Promise<IselectDTO[]> {
    const countries: IselectDTO[] = [
      { value: 'ARG', id: 'ARG' },
      { value: 'MEX', id: 'MEX' },
      { value: 'SPA', id: 'SPA' }
    ]
    return countries
  }

  private static getFiltered(items: IrecordDTO[], filter: IFilter): IrecordDTO[] {
    let fileredRecords: IrecordDTO[] = []

    if (filter.country && filter.seller) {
      fileredRecords = items.filter(item => item.seller === filter.seller && item.country === filter.country)
    } else if (filter.country) {
      fileredRecords = items.filter(item => item.country === filter.country)
    } else if (filter.seller) {
      fileredRecords = items.filter(item => item.seller === filter.seller)
    } else {
      return items
    }
    return fileredRecords
  }
}

export { sellerService }