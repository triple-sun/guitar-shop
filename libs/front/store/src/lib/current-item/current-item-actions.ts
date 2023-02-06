import { AppAction, ApiRoute, ItemAction, AppRoute } from '@guitar-shop/front/enums';
import { TAddReviewData, TGuitar, TItemData, TReview } from '@guitar-shop/front/types';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { redirectToRoute } from '../common/common.actions';
import { TAppDispatch, TState } from '../store';

export const resetCurrentMovieAction = createAction(ItemAction.ResetCurrentItem)

export const fetchCurrentItemAction = createAsyncThunk<TItemData, number, {
  dispatch: TAppDispatch,
  state: TState,
  extra: AxiosInstance
}>(
  AppAction.FetchCurrentItem,
  async (id, {dispatch, extra: api}) => {
    const {data: item} = await api.get<TGuitar>(`${ApiRoute.Items}/${id}`);
    const {data: reviews} = await api.get<TReview[]>(`${ApiRoute.Reviews}/${id}`);
    
    return {item, reviews};
  },
);

export const addReviewAction = createAsyncThunk<void, TAddReviewData & {id: number}, {
  dispatch: TAppDispatch,
  state: TState,
  extra: AxiosInstance
}>(
  ItemAction.AddReview,
  async ({rating, comment, id}, {dispatch, extra: api}) => {
    await api.post<TReview[]>(`${ApiRoute.Reviews}/${id}`, {comment, rating});

    dispatch(fetchCurrentItemAction(id));

    dispatch(redirectToRoute(`${AppRoute.Items}/${id}`));
  },
);

