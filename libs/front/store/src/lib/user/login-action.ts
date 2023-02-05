import { EAPIRoute, EUserAction } from '@guitar-shop/front/enums';
import { TAuthData, TUser } from '@guitar-shop/front/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { saveToken } from '../services/token';
import { TAppDispatch, TState } from '../store';
import verifyUserAction from './verify-user-action';

type TUserLoggedRdo = { token: string }

export const loginAction = createAsyncThunk<
  TUser,
  TAuthData,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }>(
    EUserAction.Login,
    async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<TUserLoggedRdo>(EAPIRoute.Login, { email, password });
    console.log(data.token)
    saveToken(data.token);
    const userData = (await dispatch(verifyUserAction())).payload
    return userData as TUser;
});

export default loginAction
