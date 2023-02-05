import { EAPIRoute, AppAction, SortBy, SortOrder } from '@guitar-shop/front/enums';
import { TFetchItemsQuery, TGuitar, TItemsData } from '@guitar-shop/front/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { TAppDispatch, TState } from '../store';

export const fetchItemsAction = createAsyncThunk<TItemsData, TFetchItemsQuery, {
  dispatch: TAppDispatch,
  state: TState,
  extra: AxiosInstance
}>(
  AppAction.FetchItems,
  async ({strings: stringCounts = [], types: guitarTypes = [], sortBy = SortBy.Date, sortOrder = SortOrder.Asc, page = 1}, {dispatch, extra: api}) => {
    const {data: allItems} = await api.get<TGuitar[]>(`${EAPIRoute.Items}?limit=0`);
    const {data: items} = await api.get<TGuitar[]>(`${EAPIRoute.Items}?strings=${stringCounts}&types=${guitarTypes}&sortBy=${sortBy}&sortOrder=${sortOrder}&page=${page}`);
    return {items, allItems};
  },
);

export const fetchSingleItemAction = createAsyncThunk<TGuitar, number, {
  dispatch: TAppDispatch,
  state: TState,
  extra: AxiosInstance
}>(
  AppAction.FetchSingleItem,
  async (id, {dispatch, extra: api}) => {
    const {data: item} = await api.get<TGuitar>(`${EAPIRoute.Items}/${id}`);
    return item;
  },
);
