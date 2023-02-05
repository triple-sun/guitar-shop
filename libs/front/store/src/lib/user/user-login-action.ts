import { EAPIRoute, EAppRoute, UserAction } from '@guitar-shop/front/enums';
import { TAuthData, TUser } from '@guitar-shop/front/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { redirectToRoute } from '../common/common.actions';
import { saveToken } from '../services/token';
import { TAppDispatch, TState } from '../store';
import { setAuthAction } from './user-set-auth-action';

type TUserLoggedRdo = { token: string }

export const loginAction = createAsyncThunk<
  TUser,
  TAuthData,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }>(
    UserAction.Login,
    async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<TUserLoggedRdo>(EAPIRoute.Login, { email, password });
    saveToken(data.token);
    const userData = (await dispatch(setAuthAction())).payload
    dispatch(redirectToRoute(EAppRoute.Main))
    return userData as TUser;
});

export default loginAction
