import { EUserAction } from "@guitar-shop/front/enums";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
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
>(EUserAction.Logout, async (_arg, { dispatch, extra: api }) => {
  dropToken();
});

export default logoutAction
