import { createSelector } from "@reduxjs/toolkit";
import { TState } from "../store";

export const getCurrentOrderState = (state: TState) => state.CURRENT_ORDER

export const getCurrentOrder = createSelector(getCurrentOrderState, (state) => state.data);
export const getIsOrderLoaded = createSelector(getCurrentOrderState, (state) => state.isLoaded);
