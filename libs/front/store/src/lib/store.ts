import { Slice } from "@guitar-shop/front/enums";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { catalog } from "./catalog/catalog";
import { currentItem } from "./current-item/current-item";
import { currentOrder } from "./current-order/current-order";
import { redirect } from "./middlewares/redirect";
import { orders } from "./orders/orders";
import { createApi } from "./services/api";
import { user } from "./user/user";

export const rootReducer = combineReducers({
  [Slice.User]: user.reducer,
  [Slice.Catalog]: catalog.reducer,
  [Slice.Orders]: orders.reducer,
  [Slice.CurrentItem]: currentItem.reducer,
  [Slice.CurrentOrder]: currentOrder.reducer
});

export const api = createApi()

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

export type TState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
