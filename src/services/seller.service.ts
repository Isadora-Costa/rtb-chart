// import axios from 'axios';

interface IselectDTO {
  value: string;
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
  private static sellerDtoPage1: IsellerDTO;
  private static sellerDtoPage2: IsellerDTO;
  private static sellerDtoPage3: IsellerDTO;
  private static topSellerDto: ItopSellerDTO[];

  static async getPage(page: number): Promise<IsellerDTO> {
    sellerService.sellerDtoPage1 = {
      records:
        [
          { orderId: 1, product: 'Laptop #1', seller: 1, country: 'SPA', price: 200 },
          { orderId: 2, product: 'Laptop #1', seller: 1, country: 'SPA', price: 200 },
          { orderId: 3, product: 'Laptop #1', seller: 1, country: 'SPA', price: 200 },
          { orderId: 4, product: 'Laptop #1', seller: 1, country: 'SPA', price: 200 },
          { orderId: 5, product: 'Laptop #1', seller: 1, country: 'SPA', price: 200 },
          { orderId: 6, product: 'Laptop #1', seller: 1, country: 'SPA', price: 200 },
          { orderId: 7, product: 'Laptop #1', seller: 1, country: 'SPA', price: 200 },
          { orderId: 8, product: 'Laptop #1', seller: 1, country: 'SPA', price: 200 },
          { orderId: 9, product: 'Laptop #1', seller: 1, country: 'SPA', price: 200 },
          { orderId: 10, product: 'Laptop #1', seller: 1, country: 'SPA', price: 200 },
        ],
      meta: {
        previous: 0,
        current: 1,
        next: 2,
        limit: 10,
        count: 10
      }
    };

    sellerService.sellerDtoPage2 = {
      records:
        [
          { orderId: 11, product: 'Laptop #2', seller: 2, country: 'MEX', price: 300 },
          { orderId: 12, product: 'Laptop #2', seller: 2, country: 'MEX', price: 300 },
          { orderId: 13, product: 'Laptop #2', seller: 2, country: 'MEX', price: 300 },
          { orderId: 14, product: 'Laptop #2', seller: 2, country: 'MEX', price: 300 },
        ],
      meta: {
        previous: 1,
        current: 2,
        next: 3,
        limit: 10,
        count: 10
      }
    };

    sellerService.sellerDtoPage3 = {
      records:
        [
          { orderId: 15, product: 'Laptop #3', seller: 3, country: 'ARG', price: 100 },
          { orderId: 16, product: 'Laptop #3', seller: 3, country: 'ARG', price: 100 },
          { orderId: 17, product: 'Laptop #3', seller: 3, country: 'ARG', price: 100 },
          { orderId: 18, product: 'Laptop #3', seller: 3, country: 'ARG', price: 100 },
          { orderId: 19, product: 'Laptop #3', seller: 3, country: 'ARG', price: 100 },
          { orderId: 20, product: 'Laptop #3', seller: 3, country: 'ARG', price: 100 },
        ],
      meta: {
        previous: 2,
        current: 3,
        next: 0,
        limit: 10,
        count: 10
      }
    };

    switch (page) {
      case 1:
        return sellerService.sellerDtoPage1
      
      case 2:
        return sellerService.sellerDtoPage2
      
      case 3:
        return sellerService.sellerDtoPage3
    
      default:
        return sellerService.sellerDtoPage1;
    }
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
}


export { sellerService }