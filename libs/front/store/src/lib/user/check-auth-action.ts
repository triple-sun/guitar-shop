import { EAPIRoute, EUserAction } from "@guitar-shop/front/enums";
import { TUser } from "@guitar-shop/front/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { getToken } from "../services/token";
import { TAppDispatch, TState } from "../store";

export const setAuthAction = createAsyncThunk<
  TUser | void,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>(EUserAction.SetAuth, async (_arg, { dispatch, extra: api }) => {
  const token = getToken();

  if (token) {
    const { data } = await api.get<TUser>(EAPIRoute.Verify)

    return data
  }
});

export default setAuthAction
