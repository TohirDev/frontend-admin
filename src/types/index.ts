import { ReactNode } from "react";

export type TRegLoginData = {
  message: string;
  data: {
    _id: string;
    phone_number: string;
    password: string;
    isAdmin: boolean;
    __v: 0;
  };
  token: string;
  success: boolean;
};

export type Inputs = {
  phone_number: number;
  password: string;
};

export type TListItemLink = {
  path: string;
  text: string;
  icon: ReactNode;
};

export type TuseFetchData<T extends object> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

export type TDataType = {
  data: {
    _id: string;
    Image: string | string[];
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
    links: string | string[];
    phone_number: string;
    __v: number;
  }[];
  count: number;
};
