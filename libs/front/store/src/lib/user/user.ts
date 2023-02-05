import { EAuthStatus, ESlice } from '@guitar-shop/front/enums';
import { TUserState } from '@guitar-shop/front/types';
import { createSlice } from '@reduxjs/toolkit';
import setAuthAction from './check-auth-action';
import logoutAction from './logout-action';
import loginAction from './login-action';
import { addToCartAction, removeFromCartAction } from './user-actions';
import { toast } from 'react-toastify';
import verifyUserAction from './verify-user-action';

const userInitialState: TUserState = {
  userInfo: null,
  authStatus: EAuthStatus.Unknown,
  cart: []
};

export const user = createSlice({
  name: ESlice.User,
  initialState: userInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addToCartAction, (state, action) => {
        state.cart = [...state.cart, action.payload]
      })
      .addCase(removeFromCartAction, (state, action) => {
        const index = state.cart.lastIndexOf(action.payload)

        index
          ? toast.warn(`${action.payload.model} и такотсутствует в вашей корзине`)
          : state.cart.splice(index, 1)
      })
      .addCase(verifyUserAction.fulfilled, (state, action) => {
        state.authStatus = EAuthStatus.Auth;
        state.userInfo = action.payload;
      })
      .addCase(verifyUserAction.rejected, (state) => {
        state.authStatus = EAuthStatus.NoAuth;
        state.userInfo = null;
      })
      .addCase(setAuthAction.fulfilled, (state, action) => {
        if (action.payload) {
          state.authStatus = EAuthStatus.Auth;
        }
      })
      .addCase(setAuthAction.rejected, (state) => {
        state.authStatus = EAuthStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authStatus = EAuthStatus.Auth;
        state.userInfo = action.payload;
        toast.info('Logged in successfully!')
      })
      .addCase(loginAction.rejected, (state) => {
        state.authStatus = EAuthStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.userInfo = userInitialState.userInfo;
        state.authStatus = EAuthStatus.NoAuth;
      });
  },
});
