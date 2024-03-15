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
