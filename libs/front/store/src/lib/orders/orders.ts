import { Slice, SortBy, SortOrder } from '@guitar-shop/front/enums';
import { TOrdersState } from '@guitar-shop/front/types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchOrdersAction, setOrdersPageAction, setOrdersSortAction, setOrdersSortOrderAction } from './orders-actions';

const initialState: TOrdersState = {
  data: {
    orders: [],
    allOrders: []
  },
  isLoaded: true,
  sortBy: SortBy.Date,
  sortOrder: SortOrder.Asc,
  page: 1,
  limit: 6
}

export const orders = createSlice({
  name: Slice.Catalog,
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(setOrdersSortAction, (state, action) => {
        state.sortBy = action.payload
      })
      .addCase(setOrdersSortOrderAction, (state, action) => {
        state.sortOrder = action.payload
      })
      .addCase(setOrdersPageAction, (state, action) => {
        state.page = action.payload
      })
      .addCase(fetchOrdersAction.pending, (state) => {
        state.isLoaded = false;
      })
      .addCase(fetchOrdersAction.fulfilled, (state, {payload}) => {
        state.data.orders = payload.orders
        state.data.allOrders = payload.allOrders
        state.isLoaded = true;
      });
  }
});

