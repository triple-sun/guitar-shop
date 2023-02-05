import { ItemAction, SortBy, SortOrder } from '@guitar-shop/front/enums';
import { GuitarType, StringCount } from '@prisma/client';
import {createAction} from '@reduxjs/toolkit';

export const toggleStringCountAction = createAction<StringCount>(ItemAction.ToggleStringCount);
export const toggleGuitarTypeAction = createAction<GuitarType>(ItemAction.ToggleGuitarType);

export const setSortAction = createAction<SortBy>(ItemAction.SetSort)
export const setSortOrderAction = createAction<SortOrder>(ItemAction.SetSortOrder)
export const setPageAction = createAction<number>(ItemAction.SetPage)

export const setMinPriceAction = createAction<number>(ItemAction.SetMinPrice)
export const setMaxPriceAction = createAction<number>(ItemAction.SetMinPrice)

export const resetFiltersAction = createAction(ItemAction.ResetFilters)
export const resetSortAction = createAction(ItemAction.ResetSort)
