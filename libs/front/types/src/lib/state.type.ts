import { AuthStatus, SortBy, SortOrder } from '@guitar-shop/front/enums';
import { GuitarType, StringCount } from '@prisma/client';
import { TCart, TCurrentItemData, TData, TItemsData } from './data.type';
import { TUser } from './user.type';

export type TCurrentItemState = TData<TCurrentItemData> & {
  isAddingReview: boolean;
};

export type TUserState = {
  userInfo: TUser | null;
  authStatus: AuthStatus;
  cart: TCart;
};

export type TItemsState = TData<TItemsData> & {
  strings: StringCount[];
  types: GuitarType[];
  sortBy: SortBy;
  sortOrder: SortOrder;
  page: number;
  minPrice?: number;
  maxPrice?: number;
};

export type TFetchItemsQuery = Pick<Partial<TItemsState>, 'types' | 'strings' | 'sortBy' | 'sortOrder' | 'page' | 'minPrice' | 'maxPrice'>

