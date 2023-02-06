import { ApiRoute, AppAction, ItemAction, SortBy, SortOrder } from '@guitar-shop/front/enums';
import { createAction } from '@reduxjs/toolkit';
import { TFetchOrdersQuery, TOrder, TOrdersData } from '@guitar-shop/front/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { TAppDispatch, TState } from '../store';

export const setOrdersSortAction = createAction<SortBy>(ItemAction.SetSort)
export const setOrdersSortOrderAction = createAction<SortOrder>(ItemAction.SetSortOrder)
export const setOrdersPageAction = createAction<number>(ItemAction.SetPage)

export const fetchOrdersAction = createAsyncThunk<TOrdersData, TFetchOrdersQuery, {
  dispatch: TAppDispatch,
  state: TState,
  extra: AxiosInstance
}>(
  AppAction.FetchOrders,
  async ({sortBy = SortBy.Date, sortOrder = SortOrder.Asc, page = 1, limit = 6}, {dispatch, extra: api}) => {
    const {data: allOrders} = await api.get<TOrder[]>(`${ApiRoute.Orders}?limit=0`);
    const {data: orders} = await api.get<TOrder[]>(`${ApiRoute.Items}?sortBy=${sortBy}&sortOrder=${sortOrder}&page=${page}&limit=${limit}`);

    return {orders, allOrders};
  },
);
