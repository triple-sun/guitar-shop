import { AppAction, EAppRoute } from '@guitar-shop/front/enums';
import { createAction } from '@reduxjs/toolkit';

export const redirectToRoute = createAction<EAppRoute | string>(
  AppAction.RedirectToRoute
);
