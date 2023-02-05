import { EUserAction } from '@guitar-shop/front/enums';
import { TGuitar } from '@guitar-shop/front/types';
import { createAction } from '@reduxjs/toolkit';

export const addToCartAction = createAction<TGuitar>(EUserAction.AddToCart);
export const removeFromCartAction = createAction<TGuitar>(EUserAction.RemoveFromCart)
