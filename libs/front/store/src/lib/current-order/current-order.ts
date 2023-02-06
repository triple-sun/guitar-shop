import { createSlice} from '@reduxjs/toolkit';
import { Slice } from '@guitar-shop/front/enums';
import { TCurrentOrderState } from '@guitar-shop/front/types';
import { fetchCurrentOrderAction } from './current-order-actions';

const initialState: TCurrentOrderState = {
  data: null,
  isLoaded: true,
}

export const currentOrder = createSlice({
  name: Slice.CurrentOrder,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCurrentOrderAction.pending, (state) => {
        state.isLoaded = false;
      })
      .addCase(fetchCurrentOrderAction.fulfilled, (state, {payload}) => {
        state.data = payload
        state.isLoaded = true;
      })
  }
});
