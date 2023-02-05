import { EAuthStatus, ESortBy, ESortOrder } from '@guitar-shop/front/enums';
import { GuitarType, StringCount } from '@prisma/client';
import { TCurrentItemData, TData } from './data.type';
import { TGuitar } from './guitar.type';
import { TUser } from './user.type';

export type TCurrentItemState = TData<TCurrentItemData> & {
  isAddingReview: boolean;
};

export type TUserState = {
  userInfo: TUser | null;
  authStatus: EAuthStatus;
  cart: TGuitar[]
};

export type TItemsState = TData<TGuitar[]> & {
  stringCounts: StringCount[];
  guitarTypes: GuitarType[];
  sortBy: ESortBy;
  sortOrder: ESortOrder;
  page: number;
  minPrice?: number;
  maxPrice?: number;};


