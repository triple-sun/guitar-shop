import { Middleware } from 'redux';
import browserHistory from '../browser-history';
import { AppAction } from '../enums/app-action.enum';
import { rootReducer } from '../store/store';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === AppAction.RedirectToRoute) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
