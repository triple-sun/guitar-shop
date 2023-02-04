import { EAppRoute, EChangeAction } from '@guitar-shop/front/enums';
import { createAction } from '@reduxjs/toolkit';

export const redirectToRoute = createAction<EAppRoute | string>(
  EChangeAction.RedirectToRoute
);
