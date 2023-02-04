import { EAPIRoute, EUserAction } from '@guitar-shop/front/enums';
import { TAuthData, TUser } from '@guitar-shop/front/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { saveToken } from '../services/token';
import { TAppDispatch, TState } from '../store';

export const loginAction = createAsyncThunk<
  TUser,
  TAuthData,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>(EUserAction.Login, async ({ email, password }, { dispatch, extra: api }) => {
  const { data } = await api.post<TUser>(EAPIRoute.Login, { email, password });
  saveToken(data.token);
  return data;
});

export default loginAction
