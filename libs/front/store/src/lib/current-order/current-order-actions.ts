import { AppAction, ApiRoute } from '@guitar-shop/front/enums';
import { TOrder } from '@guitar-shop/front/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { TAppDispatch, TState } from '../store';

export const fetchCurrentOrderAction = createAsyncThunk<TOrder, number, {
  dispatch: TAppDispatch,
  state: TState,
  extra: AxiosInstance
}>(
  AppAction.FetchCurrentOrder,
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<TOrder>(`${ApiRoute.Orders}/${id}`);

    return data;
  },
);
