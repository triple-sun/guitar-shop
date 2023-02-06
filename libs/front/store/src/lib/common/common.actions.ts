import { AppAction, AppRoute } from '@guitar-shop/front/enums';
import { createAction } from '@reduxjs/toolkit';

export const redirectToRoute = createAction<AppRoute | string>(
  AppAction.RedirectToRoute
);
