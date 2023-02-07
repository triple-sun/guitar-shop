import { AuthStatus, Slice } from '@guitar-shop/front/enums';
import { TUserState } from '@guitar-shop/front/types';
import { createSlice } from '@reduxjs/toolkit';
import { addToCartAction, decreaseCountAction, increaseCountAction, loginAction, logoutAction, registerAction, removeFromCartAction, SetAuthAction } from './user-actions';
import { toast } from 'react-toastify';
import { dropToken, getToken } from '../services/token';

const initialState: TUserState = {
  userInfo: null,
  authStatus: AuthStatus.Unknown,
  cart: {},
};

export const user = createSlice({
  name: Slice.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(increaseCountAction, (state, {payload}) => {
        const inCart = state.cart[payload]
        if (inCart) {
          if(inCart.count === 99) {
            toast.warn('Достигнуто максимальное количество единиц одного товара.')
            return
          }

          state.cart[payload] = {...inCart, count: inCart.count + 1}
        }
      })
      .addCase(decreaseCountAction, (state, {payload}) => {
        const inCart = state.cart[payload]
          if (!inCart || inCart.count === 0){
            toast.warn(`Этот продукт и так отсутствует в вашей корзине!`)
            return;
          }

          if (inCart && inCart.count) {
            inCart.count > 0
              ? state.cart[payload] = {...inCart, count: inCart.count - 1}
              : state.cart[payload] = null
          }
      })
      .addCase(addToCartAction, (state, {payload}) => {
        const inCart = state.cart[payload.id]

        inCart
          ? state.cart[payload.id] = {...inCart, count: inCart.count + 1}
          : state.cart[payload.id] = {count: 1, item: payload}
      })
      .addCase(removeFromCartAction, (state, {payload}) => {
        if (!state.cart[payload]) {
          toast.warn(`Этот продукт и тaк отсутствует в вашей корзине!`)
          return
        }

        state.cart[payload] = null
      })
      .addCase(SetAuthAction.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.Auth
        state.userInfo = action.payload
      })
      .addCase(SetAuthAction.rejected, (state) => {
        state.userInfo = null;
        state.authStatus = AuthStatus.NoAuth;
        if (getToken()) {
          dropToken()
        }
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.Auth;
        state.userInfo = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.userInfo = null;
        state.authStatus = AuthStatus.NoAuth;
        if (getToken()) {
          dropToken()
        }
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.userInfo = null;
        state.authStatus = AuthStatus.NoAuth;
      })
      .addCase(registerAction.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.Auth;
        state.userInfo = action.payload;
      })
      .addCase(registerAction.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
        state.userInfo = null;
      })
  },
});
