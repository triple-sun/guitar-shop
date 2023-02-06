import { AuthStatus, SortBy, SortOrder } from '@guitar-shop/front/enums';
import { GuitarType, StringCount } from '@prisma/client';
import { TCart, TCurrentItemData, TData, TItemsData, TOrdersData } from './data.type';
import { TGuitar } from './guitar.type';
import { TOrder } from './order.type';
import { TUser } from './user.type';

export type TStringCountFilter = {
  [StringCount.Four]: boolean
  [StringCount.Six]: boolean
  [StringCount.Seven]: boolean
  [StringCount.Twelve]: boolean
}

export type TGuitarTypeFilter = {
  [GuitarType.Acoustic]: boolean
  [GuitarType.Electric]: boolean
  [GuitarType.Ukulele]: boolean
}

export type TPagination = {
  page: number;
  limit?: number
}

export type TSort = {
  sortBy: SortBy;
  sortOrder: SortOrder;
}

export type TFilterPrice = {
  minPrice: number;
  maxPrice: number;
}

export type TFilterItem = {
  strings: TStringCountFilter;
  types: TGuitarTypeFilter;
};

export type TCurrentItemState = TData<TCurrentItemData> & {
  isAddingReview: boolean;
};

export type TUserState = {
  userInfo: TUser | null;
  authStatus: AuthStatus;
  cart: TCart;
};

export type TCatalogState = TData<TItemsData> & TSort & TFilterItem & TFilterPrice & TPagination

export type TOrdersState = TData<TOrdersData> & TSort & TPagination

export type TCurrentOrderState = TData<TOrder | null>

export type TItemsListState = TData<TGuitar[]> & TSort & TFilterItem & TPagination

export type TFetchItemsQuery = TFilterItem & TFilterPrice & TSort & TPagination

export type TFetchOrdersQuery = TSort & TPagination

