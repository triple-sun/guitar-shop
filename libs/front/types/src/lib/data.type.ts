import { TGuitar } from "./guitar.type";
import { TOrder } from "./order.type";
import { TReview } from "./review.type";

export type TData<T = null> = {
  data: T;
  isLoaded?: boolean;
}

export type TAddReviewData = {
  rating: number;
  comment: string | null;
  pros: string;
  cons: string;
};

export type TAuthData = {
  name?: string;
  email: string;
  password: string;
};

export type TItemData = {
  item: TGuitar | null;
  reviews: TReview[];
}

export type TCurrentItemData = TData<TItemData> & {isAddingReview: boolean}

export type TItemsListData = TData<TGuitar[]>

export type TItemsData = {
  allItems: TGuitar[]
  items: TGuitar[]
}

export type TCartItem = {
  item: TGuitar;
  count: number;
}

export type TCart = {
  [id: number]: TCartItem | null
}

export type TOrdersData = {
  orders: TOrder[];
  allOrders: TOrder[];
}

