import { EAppRoute, UserAction } from "@guitar-shop/front/enums";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { redirectToRoute } from "../common/common.actions";
import { dropToken } from "../services/token";
import { TAppDispatch, TState } from "../store";

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
  dispatch(redirectToRoute(EAppRoute.Main))
});

export default logoutAction
