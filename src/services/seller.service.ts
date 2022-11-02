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

    if (afterCursor) {
      url = url + '?after=' + afterCursor
    }
    
    if (beforeCursor) {
      url = url + '?before=' + beforeCursor
    }

    if (filter?.seller) {
      if (afterCursor || beforeCursor) {
        url = url + '&seller=' + filter.seller
      } else {
        url = url + '?seller=' + filter.seller
      }
    }

    if (filter?.country) {
      if (afterCursor || beforeCursor || filter?.seller) {
        url = url + '&country=' + filter.country
      } else {
        url = url + '?country=' + filter.country
      }
    }

    const orders = await axios.get(url).then((res) => res.data)
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
    let url: string = 'http://localhost:3333/seller/top-seller';
    const topSellers = await axios.get(url).then((res) => res.data)

    if (topSellers) {
      for (const seller of topSellers) {
        sellerService.topSellerDto.push({
          name: seller.name,
          value: seller.totalSeller
        })
      }
    }

    return sellerService.topSellerDto
  }

  static async getSellectSeller(): Promise<IselectDTO[]> {
    let url: string = 'http://localhost:3333/seller';
    const sellers: IselectDTO[] = []
    const selectedSellers = await axios.get(url).then((res) => res.data)

    if (selectedSellers) {
      for (const seller of selectedSellers) {
        sellers.push({
          value: seller.name,
          id: seller.id
        })
      }
    }

    return sellers
  }

  static async getSellectCountries(): Promise<IselectDTO[]> {
    let url: string = 'http://localhost:3333/country';
    const countries: IselectDTO[] = []
    const selectedCountries = await axios.get(url).then((res) => res.data)

    if (selectedCountries) {
      for (const country of selectedCountries) {
        countries.push({
          value: country.name,
          id: country.id
        })
      }
    }

    return countries
  }
}

export { sellerService }