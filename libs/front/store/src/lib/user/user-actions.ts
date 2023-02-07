import { CartAction } from '@guitar-shop/front/enums';
import { TGuitar } from '@guitar-shop/front/types';
import { createAction } from '@reduxjs/toolkit';
import { ApiRoute, AppRoute, UserAction } from '@guitar-shop/front/enums';
import { TAuthData, TUser } from '@guitar-shop/front/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { redirectToRoute } from '../common/common.actions';
import { dropToken, saveToken } from '../services/token';
import { TAppDispatch, TState } from '../store';

type TUserLoggedRdo = { token: string }

export const increaseCountAction = createAction<number>(CartAction.IncreaseCount);
export const decreaseCountAction = createAction<number>(CartAction.DecreaseCount);

export const addToCartAction = createAction<TGuitar>(CartAction.AddToCart);
export const removeFromCartAction = createAction<number>(CartAction.RemoveFromCart);

export const registerAction = createAsyncThunk<
  TUser,
  TAuthData,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }>(
    UserAction.Register,
    async ({ name, email, password }, { dispatch, extra: api }) => {
    const {data} = await api.post<TUser>(ApiRoute.Auth, { name, email, password });

    return data
});

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
    const { data } = await api.post<TUserLoggedRdo>(ApiRoute.Login, { email, password });
    saveToken(data.token);
    const userData = (await dispatch(SetAuthAction())).payload
    dispatch(redirectToRoute(AppRoute.Main))
    return userData as TUser;
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>(UserAction.Logout, async (_arg, { dispatch, extra: api }) => {
  dropToken();
  dispatch(redirectToRoute(AppRoute.Main))
});

export const SetAuthAction = createAsyncThunk<
  TUser,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>(UserAction.SetAuthAction, async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<TUser>(ApiRoute.Verify);

  return data;
});


