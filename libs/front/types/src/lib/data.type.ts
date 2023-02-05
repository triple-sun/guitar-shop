import { TGuitar } from "./guitar.type";
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
  email: string;
  password: string;
};

export type TCurrentItemData = {
  item: TGuitar | null;
  reviews: TReview[];
}

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
