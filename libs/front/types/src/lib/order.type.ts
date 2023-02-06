import { TCartItem, TData } from "./data.type";

export type TOrderItem = TCartItem & {
  totalPrice: number;
}

export type TOrder = {
  id: number;
  itemCount: number;
  orderPrice: number;
  createdAt: Date;
  items: TOrderItem[];
}
