import { ESlice } from "@guitar-shop/front/enums";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { items } from "./items/items";
import { redirect } from "./middlewares/redirect";
import { createApi } from "./services/api";
import { user } from "./user/user";

export const rootReducer = combineReducers({
  [ESlice.User]: user.reducer,
  [ESlice.Items]: items.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: createApi(),
      },
    }).concat(redirect),
});

export type TState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
