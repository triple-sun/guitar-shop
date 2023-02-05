import { ESlice, SortBy, SortOrder } from '@guitar-shop/front/enums';
import { TItemsState } from '@guitar-shop/front/types';
import { setFilter } from '@guitar-shop/front/utils';
import { GuitarType, StringCount } from '@prisma/client';
import { createSlice } from '@reduxjs/toolkit';
import { store } from '../store';
import { resetFiltersAction, resetSortAction, setPageAction, setSortAction, setSortOrderAction, toggleGuitarTypeAction, toggleStringCountAction } from './items-actions';
import { fetchItemsAction } from './items-api-actions';

const ITEMS_INITIAL_STATE: TItemsState = {
  data: {
    items: [],
    allItems: []
  },
  isLoaded: false,
  sortBy: SortBy.Date,
  sortOrder: SortOrder.Desc,
  strings: [],
  types: [],
  maxPrice: undefined,
  minPrice: undefined,
  page: 1,
}

export const items = createSlice({
  name: ESlice.Items,
  initialState: ITEMS_INITIAL_STATE,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(toggleStringCountAction, (state, action) => {
        state.strings = setFilter(StringCount, state.strings, action.payload)

        store.dispatch(fetchItemsAction({...state}))
      })
      .addCase(toggleGuitarTypeAction, (state, action) => {
        state.types = setFilter(GuitarType, state.types, action.payload)

        store.dispatch(fetchItemsAction({...state}))
      })
      .addCase(setSortAction, (state, action) => {
        state.sortBy = action.payload

        store.dispatch(fetchItemsAction({...state}))
      })
      .addCase(setSortOrderAction, (state, action) => {
        state.sortOrder = action.payload

        store.dispatch(fetchItemsAction({...state}))
      })
      .addCase(setPageAction, (state, action) => {
        state.page = action.payload

        store.dispatch(fetchItemsAction({...state}))
      })
      .addCase(resetFiltersAction, (state) => {
        state.strings = []
        state.types = []
        state.page = 1
        state.maxPrice = undefined
        state.minPrice = undefined

        store.dispatch(fetchItemsAction({...state}))
      })
      .addCase(resetSortAction, (state) => {
        state.sortBy = SortBy.Date
        state.sortOrder = SortOrder.Desc
        state.page = 1

        store.dispatch(fetchItemsAction({...state}))
      })
      .addCase(fetchItemsAction.pending, (state) => {
        state.isLoaded = false;
      })
      .addCase(fetchItemsAction.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoaded = true;
      });
  }
});

