import { fetchCatalogAction, getAllItems, getCatalogItems, getCatalogPage, getGuitarTypes, getMaxPrice, getMinPrice, getCatalogSortBy, getStringCounts, resetFiltersAction, resetSortAction, setMaxPriceAction, setMinPriceAction, setPageAction, setSortAction, toggleGuitarTypeAction, toggleStringCountAction, getCatalogSortOrder, setSortOrderAction } from '@guitar-shop/front/store';
import { GuitarType, StringCount } from '@prisma/client';
import { useCallback, useEffect } from 'react';
import { SortBy, SortOrder } from '@guitar-shop/front/enums';
import { useAppSelector } from '../use-app-selector/use-app-selector';
import { useAppDispatch } from '../use-app-dispatch/use-app-dispatch';

export const useCatalog = ({forList = false}: {forList?: boolean} = {}) => {
  const items = useAppSelector(getCatalogItems)
  const allItems = useAppSelector(getAllItems)

  const strings = useAppSelector(getStringCounts)
  const types = useAppSelector(getGuitarTypes)

  const minPrice = useAppSelector(getMinPrice)
  const maxPrice = useAppSelector(getMaxPrice)

  const sortBy = useAppSelector(getCatalogSortBy)
  const sortOrder = useAppSelector(getCatalogSortOrder)

  const page = useAppSelector(getCatalogPage)

  const dispatch = useAppDispatch();

  const handlePageInput = useCallback(
    (page: number) => {
      dispatch(setPageAction(page));
    }, [dispatch],
  );

  const handleGuitarTypeInput = useCallback(
    (type: keyof typeof GuitarType) => {
      dispatch(toggleGuitarTypeAction(type));
    }, [dispatch]
  );

  const handleStringsCountInput = useCallback(
    (count: keyof typeof StringCount) => {
      dispatch(toggleStringCountAction(count));
    }, [dispatch]
  );

  const handleMaxPriceInput = useCallback(
    (price: number) => {
      dispatch(setMaxPriceAction(price));
    }, [dispatch]
  );

  const handleMinPriceInput = useCallback(
    (price: number) => {
      dispatch(setMinPriceAction(price));
    }, [dispatch]
  );

  const handleSortByChange = useCallback(
    (sortBy: SortBy) => {
      dispatch(setSortAction(sortBy));
    }, [dispatch]
  );

  const handleSortOrderChange = useCallback(
    (sortOrder: SortOrder) => {
      dispatch(setSortOrderAction(sortOrder));
    }, [dispatch]
  );

  const handleFiltersReset = useCallback(
    () => {
      dispatch(resetFiltersAction())
    }, [dispatch]
  )

  const handleSortReset = useCallback(
    () => {
      dispatch(resetSortAction())
    }, [dispatch]
  )

  useEffect(() => {
    forList
      ? dispatch(fetchCatalogAction({strings, types, maxPrice, minPrice, sortBy, sortOrder, page, limit: 7}))
      : dispatch(fetchCatalogAction({strings, types, maxPrice, minPrice, sortBy, sortOrder, page}))
  }, [dispatch, forList, maxPrice, minPrice, page, sortBy, sortOrder, strings, types])

  return {
    items,
    allItems,
    types,
    strings,
    minPrice,
    maxPrice,
    page,
    sortBy,
    sortOrder,
    handlePageInput,
    handleGuitarTypeInput,
    handleStringsCountInput,
    handleMaxPriceInput,
    handleMinPriceInput,
    handleFiltersReset,
    handleSortReset,
    handleSortByChange,
    handleSortOrderChange
  };
};

export default useCatalog;
