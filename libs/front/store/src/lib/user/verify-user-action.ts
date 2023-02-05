import { EAPIRoute, EUserAction } from "@guitar-shop/front/enums";
import { TUser } from "@guitar-shop/front/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { TAppDispatch, TState } from "../store";

export const verifyUserAction = createAsyncThunk<
  TUser,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>(EUserAction.VerifyUser, async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<TUser>(EAPIRoute.Verify);

  return data;
});

export default verifyUserAction
