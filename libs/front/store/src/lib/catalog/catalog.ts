import { Slice, SortBy, SortOrder } from '@guitar-shop/front/enums';
import { TCatalogState } from '@guitar-shop/front/types';
import { GuitarType, StringCount } from '@prisma/client';
import { createSlice } from '@reduxjs/toolkit';
import { fetchCatalogAction, resetFiltersAction, resetSortAction, setPageAction, setSortAction, setSortOrderAction, toggleGuitarTypeAction, toggleStringCountAction } from './catalog-actions';

const initialState: TCatalogState = {
  data: {
    items: [],
    allItems: []
  },
  isLoaded: false,
  sortBy: SortBy.Date,
  sortOrder: SortOrder.Desc,
  strings: {
    [StringCount.Four]: false,
    [StringCount.Six]: false,
    [StringCount.Seven]: false,
    [StringCount.Twelve]: false
  },
  types: {
    [GuitarType.Acoustic]: false,
    [GuitarType.Electric]: false,
    [GuitarType.Ukulele]: false
  },
  maxPrice: 1000000,
  minPrice: 100,
  page: 1,
}

export const catalog = createSlice({
  name: Slice.Catalog,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(toggleStringCountAction, (state, {payload}) => {
        state.strings[payload] = !state.strings[payload]
      })
      .addCase(toggleGuitarTypeAction, (state, {payload}) => {
        state.types[payload] = !state.types[payload]
      })
      .addCase(setSortAction, (state, action) => {
        state.sortBy = action.payload
      })
      .addCase(setSortOrderAction, (state, action) => {
        state.sortOrder = action.payload
      })
      .addCase(setPageAction, (state, action) => {
        state.page = action.payload
      })
      .addCase(resetFiltersAction, (state) => {
        state.strings = initialState.strings
        state.types = initialState.types
        state.page = 1
        state.maxPrice = 1000000
        state.minPrice = 100
      })
      .addCase(resetSortAction, (state) => {
        state.sortBy = SortBy.Date
        state.sortOrder = SortOrder.Desc
        state.page = 1
      })
      .addCase(fetchCatalogAction.pending, (state) => {
        state.isLoaded = false;
      })
      .addCase(fetchCatalogAction.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoaded = true;
      });
  }
});

