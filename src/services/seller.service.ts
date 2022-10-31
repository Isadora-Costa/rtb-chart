// import axios from 'axios';

interface IselectDTO {
  value: string;
}

interface IFilter {
  seller?: number,
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
  seller: number;
  country: string;
  price: number;
}

interface IsellerDTO {
  records: IrecordDTO[];
  meta: ImetaDTO;
}

class sellerService {
  private static sellerDtoPage: IsellerDTO = {
    records:
      [
        { orderId: 1, product: 'Laptop #1', seller: 1, country: 'SPA', price: 200 },
        { orderId: 2, product: 'Laptop #2', seller: 1, country: 'SPA', price: 200 },
        { orderId: 3, product: 'Laptop #3', seller: 1, country: 'SPA', price: 200 },
        { orderId: 4, product: 'Laptop #4', seller: 1, country: 'SPA', price: 200 },
        { orderId: 5, product: 'Laptop #5', seller: 1, country: 'SPA', price: 200 },
        { orderId: 6, product: 'Laptop #6', seller: 1, country: 'SPA', price: 200 },
        { orderId: 7, product: 'Laptop #7', seller: 1, country: 'SPA', price: 200 },
        { orderId: 8, product: 'Laptop #8', seller: 1, country: 'SPA', price: 200 },
        { orderId: 9, product: 'Laptop #9', seller: 1, country: 'SPA', price: 200 },
        { orderId: 10, product: 'Laptop #10', seller: 1, country: 'SPA', price: 200 },
        { orderId: 11, product: 'Laptop 11', seller: 2, country: 'MEX', price: 300 },
        { orderId: 12, product: 'Laptop #12', seller: 2, country: 'MEX', price: 300 },
        { orderId: 13, product: 'Laptop #13', seller: 2, country: 'MEX', price: 300 },
        { orderId: 14, product: 'Laptop #14', seller: 2, country: 'MEX', price: 300 },
        { orderId: 15, product: 'Laptop #15', seller: 3, country: 'ARG', price: 100 },
        { orderId: 16, product: 'Laptop #16', seller: 3, country: 'ARG', price: 100 },
        { orderId: 17, product: 'Laptop #17', seller: 3, country: 'ARG', price: 100 },
        { orderId: 18, product: 'Laptop #18', seller: 3, country: 'ARG', price: 100 },
        { orderId: 19, product: 'Laptop #19', seller: 3, country: 'ARG', price: 100 },
        { orderId: 20, product: 'Laptop #20', seller: 3, country: 'ARG', price: 100 },
        { orderId: 21, product: 'Laptop #21', seller: 3, country: 'ARG', price: 100 },
        { orderId: 22, product: 'Laptop #22', seller: 3, country: 'ARG', price: 100 },
        { orderId: 23, product: 'Laptop #23', seller: 3, country: 'ARG', price: 100 },
        { orderId: 24, product: 'Laptop #24', seller: 3, country: 'ARG', price: 100 },
        { orderId: 25, product: 'Laptop #25', seller: 3, country: 'ARG', price: 100 },
        { orderId: 26, product: 'Laptop #26', seller: 3, country: 'ARG', price: 100 },
        { orderId: 27, product: 'Laptop #27', seller: 3, country: 'ARG', price: 100 },
        { orderId: 28, product: 'Laptop #28', seller: 3, country: 'ARG', price: 100 },
        { orderId: 29, product: 'Laptop #29', seller: 3, country: 'ARG', price: 100 },
        { orderId: 30, product: 'Laptop #30', seller: 3, country: 'ARG', price: 100 }
      ],
    meta: {
      previous: 0,
      current: 1,
      next: 2,
      limit: 7,
      count: 10
    }
  }

  private static topSellerDto: ItopSellerDTO[];

  static async getPage(page: number, filter?: IFilter, limit: number = 7): Promise<IsellerDTO> {
    if (filter) {
      sellerService.sellerDtoPage.records = sellerService.getFiltered(sellerService.sellerDtoPage.records, filter)
    }

    return sellerService.paginate(sellerService.sellerDtoPage, page, limit)
  }

  static async getSellers(): Promise<ItopSellerDTO[]> {
    sellerService.topSellerDto = [
      { name: 'Seller 01', value: '200.000,00' },
      { name: 'Seller 02', value: '150.000,00' },
      { name: 'Seller 03', value: '100.000,00' }
    ]
    return sellerService.topSellerDto
  }

  static async getSellectSeller(): Promise<IselectDTO[]> {
    const seller: IselectDTO[] = [
      { value: 'Seller 01' },
      { value: 'Seller 02' },
      { value: 'Seller 03' }
    ]
    return seller
  }

  static async getSellectCountries(): Promise<IselectDTO[]> {
    const countries: IselectDTO[] = [
      { value: 'ARG' },
      { value: 'MEX' },
      { value: 'SPA' }
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

  private static paginate(sellerDto: IsellerDTO, page: number = 1, limit: number = 7): IsellerDTO {
    const offset = limit * (page - 1);
    const count = Math.ceil(sellerDto.records.length / limit);
    const paginatedItems = sellerDto.records.slice(offset, limit * page);

    sellerDto.records = paginatedItems
    sellerDto.meta = {
      previous: page-1,
      current: page,
      next: page+1,
      limit: limit,
      count: count
    }

    return sellerDto
  }
}

export { sellerService }