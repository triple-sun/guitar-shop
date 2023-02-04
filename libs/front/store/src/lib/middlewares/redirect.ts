import { EChangeAction } from "@guitar-shop/front/enums";
import { Middleware } from "@reduxjs/toolkit";
import browserHistory from "../browser-history";
import { rootReducer } from "../store";

export type TReducer = ReturnType<typeof rootReducer>

export const redirect: Middleware<unknown, TReducer> =
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === EChangeAction.RedirectToRoute) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };

export default redirect;
