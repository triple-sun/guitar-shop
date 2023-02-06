import { ApiRoute, AppAction, ItemAction, SortBy, SortOrder } from '@guitar-shop/front/enums';
import { GuitarType, StringCount } from '@prisma/client';
import {createAction} from '@reduxjs/toolkit';
import { TFetchItemsQuery, TGuitar, TItemsData } from '@guitar-shop/front/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { TAppDispatch, TState } from '../store';
import { getFetchCatalogQueryString } from '@guitar-shop/front/utils';

export const toggleStringCountAction = createAction<StringCount>(ItemAction.ToggleStringCount);
export const toggleGuitarTypeAction = createAction<GuitarType>(ItemAction.ToggleGuitarType);

export const setSortAction = createAction<SortBy>(ItemAction.SetSort)
export const setSortOrderAction = createAction<SortOrder>(ItemAction.SetSortOrder)
export const setPageAction = createAction<number>(ItemAction.SetPage)

export const setMinPriceAction = createAction<number>(ItemAction.SetMinPrice)
export const setMaxPriceAction = createAction<number>(ItemAction.SetMinPrice)

export const resetFiltersAction = createAction(ItemAction.ResetFilters)
export const resetSortAction = createAction(ItemAction.ResetSort)

export const fetchCatalogAction = createAsyncThunk<TItemsData, TFetchItemsQuery, {
  dispatch: TAppDispatch,
  state: TState,
  extra: AxiosInstance
}>(
  AppAction.FetchCatalog,
  async (query, {dispatch, extra: api}) => {
    const queryString = getFetchCatalogQueryString(query)

    const {data: allItems} = await api.get<TGuitar[]>(`${ApiRoute.Items}?limit=0`);
    const {data: items} = await api.get<TGuitar[]>(`${ApiRoute.Items}?${queryString}`);

    return {items, allItems};
  },
);
