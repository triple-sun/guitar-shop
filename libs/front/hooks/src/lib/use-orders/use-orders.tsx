import { getOrders, getCatalogPage, getCatalogSortBy, getCatalogSortOrder, getAllOrders, setOrdersPageAction, setOrdersSortAction, setOrdersSortOrderAction, fetchOrdersAction } from '@guitar-shop/front/store';
import { useCallback, useEffect } from 'react';
import { SortBy, SortOrder } from '@guitar-shop/front/enums';
import { useAppSelector } from '../use-app-selector/use-app-selector';
import { useAppDispatch } from '../use-app-dispatch/use-app-dispatch';

export const useOrders = () => {
  const orders = useAppSelector(getOrders)
  const allOrders = useAppSelector(getAllOrders)

  const sortBy = useAppSelector(getCatalogSortBy)
  const sortOrder = useAppSelector(getCatalogSortOrder)

  const page = useAppSelector(getCatalogPage)

  const dispatch = useAppDispatch();

  const handlePageInput = useCallback(
    (page: number) => {
      dispatch(setOrdersPageAction(page));
    }, [dispatch],
  );

  const handleSortByChange = useCallback(
    (sortBy: SortBy) => {
      dispatch(setOrdersSortAction(sortBy));
    }, [dispatch]
  );

  const handleSortOrderChange = useCallback(
    (sortOrder: SortOrder) => {
      dispatch(setOrdersSortOrderAction(sortOrder));
    }, [dispatch]
  );

  useEffect(() => {
    dispatch(fetchOrdersAction({sortBy, sortOrder, page}))
  }, [dispatch, page, sortBy, sortOrder])

  return {
    orders,
    allOrders,
    page,
    sortBy,
    sortOrder,
    handlePageInput,
    handleSortByChange,
    handleSortOrderChange
  };
};

export default useOrders;
