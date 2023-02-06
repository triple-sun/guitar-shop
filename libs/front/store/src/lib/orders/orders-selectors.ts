import { createSelector } from 'reselect';
import { TState } from '../store';

export const getOrdersState = (state: TState) => state.ORDERS;

export const getOrders = createSelector(getOrdersState, (state) => state.data.orders);
export const getAllOrders = createSelector(getOrdersState, (state) => state.data.allOrders)

export const getOrdersPage = createSelector(getOrdersState, (state) => state.page)

export const getOrdersSortBy = createSelector(getOrdersState, (state) => state.sortBy)
export const getOrdersSortOrder = createSelector(getOrdersState, (state) => state.sortOrder)

export const isOrdersDataLoaded = createSelector(getOrdersState, (state) => state.isLoaded);
