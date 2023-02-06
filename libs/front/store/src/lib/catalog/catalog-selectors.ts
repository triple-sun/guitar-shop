import { createSelector } from 'reselect';
import { TState } from '../store';

export const getCatalogState = (state: TState) => state.CATALOG;

export const getCatalogItems = createSelector(getCatalogState, (state) => state.data.items);
export const getAllItems = createSelector(getCatalogState, (state) => state.data.allItems)

export const getStringCounts = createSelector(getCatalogState, (state) => state.strings);
export const getGuitarTypes = createSelector(getCatalogState, (state) => state.types)

export const getMaxPrice = createSelector(getCatalogState, (state) => state.maxPrice)
export const getMinPrice = createSelector(getCatalogState, (state) => state.minPrice)

export const getCatalogPage = createSelector(getCatalogState, (state) => state.page)

export const getCatalogSortBy = createSelector(getCatalogState, (state) => state.sortBy)
export const getCatalogSortOrder = createSelector(getCatalogState, (state) => state.sortOrder)

export const isCatalogDataLoaded = createSelector(getCatalogState, (state) => state.isLoaded);
