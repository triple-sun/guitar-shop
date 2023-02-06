import { createSelector } from "@reduxjs/toolkit";
import { TState } from "../store";

export const getCurrentItemState = (state: TState) => state.CURRENT_ITEM

export const getCurrentItem = createSelector(getCurrentItemState, (state) => state.data.item);
export const getReviews = createSelector(getCurrentItemState, (state) => state.data.reviews);

export const getIsDCurrentItemLoaded = createSelector(getCurrentItemState, (state) => state.isLoaded)
export const getIsAddingReview = createSelector(getCurrentItemState, (state) => state.isAddingReview)
