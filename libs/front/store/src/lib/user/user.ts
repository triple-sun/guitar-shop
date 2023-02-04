import { EAuthStatus, ESlice } from '@guitar-shop/front/enums';
import { TUserState } from '@guitar-shop/front/types';
import { createSlice } from '@reduxjs/toolkit';
import checkAuthAction from './check-auth-action';
import logoutAction from './logout-action';
import loginAction from './login-action';

const userInitialState: TUserState = {
  userInfo: null,
  authStatus: EAuthStatus.Unknown,
};

export const user = createSlice({
  name: ESlice.User,
  initialState: userInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authStatus = EAuthStatus.Auth;
        state.userInfo = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authStatus = EAuthStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authStatus = EAuthStatus.Auth;
        state.userInfo = action.payload;
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
