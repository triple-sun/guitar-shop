import { EAppRoute } from "@guitar-shop/front/enums";
import { TGuitar } from "./guitar.type";
import { TReview } from "./review.type";
import { TItemsState } from "./state.type";

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

export type TItemsData = {
  items: TGuitar[];
}

export type TCurrentItemData = {
  item: TGuitar | null;
  reviews: TReview[];
}

export type TFetchItemsQuery = Pick<Partial<TItemsState>, 'guitarTypes' | 'sortBy' | 'sortOrder' | 'stringCounts' | 'page' | 'minPrice' | 'maxPrice'>
