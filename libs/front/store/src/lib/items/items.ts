import { ESlice, ESortBy, ESortOrder } from '@guitar-shop/front/enums';
import { TItemsState } from '@guitar-shop/front/types';
import { setFilter, setSortOrder } from '@guitar-shop/front/utils';
import { GuitarType, StringCount } from '@prisma/client';
import { createSlice } from '@reduxjs/toolkit';
import { setPage, setSort, toggleGuitarType, toggleStringCount } from './items-actions';
import { fetchItemsAction } from './items-api-actions';

const ITEMS_INITIAL_STATE: TItemsState = {
  data: [],
  stringCounts: [],
  guitarTypes: [],
  sortBy: ESortBy.Date,
  sortOrder: ESortOrder.Desc,
  isLoaded: false,
  page: 1
}

export const items = createSlice({
  name: ESlice.Items,
  initialState: ITEMS_INITIAL_STATE,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(toggleStringCount, (state, action) => {
        state.stringCounts = setFilter(StringCount, state.stringCounts, action.payload)

      })
      .addCase(toggleGuitarType, (state, action) => {
        state.guitarTypes = setFilter(GuitarType, state.guitarTypes, action.payload)
      })
      .addCase(setSort, (state, action) => {
        state.sortBy = action.payload
        state.sortOrder = setSortOrder(state.sortOrder, state.sortBy, action.payload)
      })
      .addCase(setPage, (state, action) => {
        state.page = action.payload
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
