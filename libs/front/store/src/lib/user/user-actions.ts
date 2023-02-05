import { CartAction } from '@guitar-shop/front/enums';
import { TGuitar } from '@guitar-shop/front/types';
import { createAction } from '@reduxjs/toolkit';

export const increaseCountAction = createAction<number>(CartAction.IncreaseCount);
export const decreaseCountAction = createAction<number>(CartAction.DecreaseCount);

export const addToCartAction = createAction<TGuitar>(CartAction.AddToCart);
export const removeFromCartAction = createAction<number>(CartAction.RemoveFromCart);
