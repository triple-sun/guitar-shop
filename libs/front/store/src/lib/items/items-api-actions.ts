import { EAPIRoute, EFetchAction, ESortBy, ESortOrder } from '@guitar-shop/front/enums';
import { TFetchItemsQuery, TGuitar } from '@guitar-shop/front/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { TAppDispatch, TState } from '../store';

export const fetchItemsAction = createAsyncThunk<TGuitar[], TFetchItemsQuery, {
  dispatch: TAppDispatch,
  state: TState,
  extra: AxiosInstance
}>(
  EFetchAction.FetchItems,
  async ({stringCounts = [], guitarTypes = [], sortBy = ESortBy.Date, sortOrder = ESortOrder.Asc, page = 1}, {dispatch, extra: api}) => {
    const {data: movies} = await api.get<TGuitar[]>(`${EAPIRoute.Items}?strings=${stringCounts}&types=${guitarTypes}&sortBy=${sortBy}&sortOrder=${sortOrder}&page=${page}`);
    return movies;
  },
);
