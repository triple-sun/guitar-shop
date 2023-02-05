import { createSelector } from 'reselect';
import { TState } from '../store';

export const getItemsState = (state: TState) => state.ITEMS;

export const isItemsDataLoaded = createSelector(getItemsState, (state) => state.isLoaded);

export const getItems = createSelector(getItemsState, (state) => state.data);

export const getStringCounts = createSelector(getItemsState, (state) => state.strings);

export const getGuitarTypes = createSelector(getItemsState, (state) => state.types)
