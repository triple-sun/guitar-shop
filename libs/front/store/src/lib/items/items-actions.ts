import { EChangeAction, ESortBy } from '@guitar-shop/front/enums';
import { GuitarType, StringCount } from '@prisma/client';
import {createAction} from '@reduxjs/toolkit';

export const toggleStringCount = createAction<StringCount>(EChangeAction.ToggleStringCount);
export const toggleGuitarType = createAction<GuitarType>(EChangeAction.ToggleGuitarType);

export const setSort = createAction<ESortBy>(EChangeAction.SetSort)
export const setPage = createAction<number>(EChangeAction.SetPage)

export const setMinPrice = createAction<number>(EChangeAction.SetMinPrice)
export const setMaxPrice = createAction<number>(EChangeAction.SetMinPrice)
