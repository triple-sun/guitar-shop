import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { createAPI } from '../services/api';

export const rootReducer = combineReducers({
  [NameSpace.MainPage]: mainPage.reducer,
  [NameSpace.CurrentMovie]: currentMovie.reducer,
  [NameSpace.User]: user.reducer
});

export const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
