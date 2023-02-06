import { createSelector } from "@reduxjs/toolkit";
import { TState } from "../store";

export const getUserState = (state: TState) => state.USER

export const getAuthStatus = createSelector(getUserState, (state) => state.authStatus);
export const getUserInfo = createSelector(getUserState, (state) => state.userInfo);
export const getIsAdmin = createSelector(getUserState, (state) => state.userInfo?.isAdmin)
export const getUserCart = createSelector(getUserState, (state) => state.cart)
