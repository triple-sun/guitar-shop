import { EChangeAction, ESortBy } from '@guitar-shop/front/enums';
import { GuitarType, StringCount } from '@prisma/client';
import {createAction} from '@reduxjs/toolkit';

export const toggleStringCountAction = createAction<StringCount>(EChangeAction.ToggleStringCount);
export const toggleGuitarTypeAction = createAction<GuitarType>(EChangeAction.ToggleGuitarType);

export const setSortAction = createAction<ESortBy>(EChangeAction.SetSort)
export const setPageAction = createAction<number>(EChangeAction.SetPage)

export const setMinPriceAction = createAction<number>(EChangeAction.SetMinPrice)
export const setMaxPriceAction = createAction<number>(EChangeAction.SetMinPrice)
