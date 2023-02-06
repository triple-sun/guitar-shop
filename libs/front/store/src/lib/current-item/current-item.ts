import { createSlice} from '@reduxjs/toolkit';
import { addReviewAction, fetchCurrentItemAction, resetCurrentMovieAction} from './current-item-actions';
import { Slice } from '@guitar-shop/front/enums';
import { TCurrentItemData } from '@guitar-shop/front/types';

const initialState: TCurrentItemData= {
  data: {
    item: null,
    reviews: []
  },
  isLoaded: true,
  isAddingReview: false
}

export const currentItem = createSlice({
  name: Slice.CurrentItem,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCurrentItemAction.pending, (state) => {
        state.isLoaded = false;
      })
      .addCase(fetchCurrentItemAction.fulfilled, (state, {payload}) => {
        state.data.item = payload.item
        state.data.reviews = payload.reviews
        state.isLoaded = true;
      })
      .addCase(resetCurrentMovieAction, (state) => {
        state.data.item = null
        state.data.reviews = []
        state.isLoaded = true;
      })
      .addCase(addReviewAction.pending, (state) => {
        state.isAddingReview = true;
      })
      .addCase(addReviewAction.fulfilled, (state) => {
        state.isAddingReview = false;
      })
      .addCase(addReviewAction.rejected, (state) => {
        state.isAddingReview = false;
      });
  }
});
