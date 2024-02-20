export interface NAV_HEADER {
  name: string;
  path: string;
}

export interface IProduct {
  _id: string;
  Image: {
    _id: string;
    public_id: string;
    url: string;
  }[];
  status: string;
  model_name: string;
  display: string;
  cpu: string;
  gpu: string;
  ram: string;
  memory: string;
  battery: string;
  box: boolean;
  condition: string;
  exchange: boolean;
  location: string;
  links: [string, string];
  phone_number: string;
  __v: number;
}

export interface IData {
  products: IProduct[];
  page: number;
  pages: number;
  total_products: number;
}
