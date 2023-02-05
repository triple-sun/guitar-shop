import { getItemsState, resetFiltersAction, resetSortAction, setMaxPriceAction, setMinPriceAction, setPageAction, setSortAction, toggleGuitarTypeAction, toggleStringCountAction } from '@guitar-shop/front/store';
import { GuitarType, StringCount } from '@prisma/client';
import { useCallback } from 'react';
import useAppDispatch from '../use-app-dispatch/use-app-dispatch';
import useAppSelector from '../use-app-selector/use-app-selector';
import { SortBy } from '@guitar-shop/front/enums';

export const useItems = () => {
  const {data: {items, allItems}, types, strings, page, minPrice, maxPrice} = useAppSelector(getItemsState);

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
    (count: StringCount) => {
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

  const handleItemsSortByInput = useCallback(
    (sortBy: SortBy) => {
      dispatch(setSortAction(sortBy));
    }, [dispatch]
  );

  const handleResetFilters = useCallback(
    () => {
      dispatch(resetFiltersAction())
    }, [dispatch]
  )

    const handleResetSort = useCallback(
    () => {
      dispatch(resetSortAction())
    }, [dispatch]
  )

  return {
    items,
    allItems,
    selectedTypes: types,
    selectedCounts: strings,
    minPrice,
    maxPrice,
    page,
    handlePageInput,
    handleGuitarTypeInput,
    handleStringsCountInput,
    handleItemsSortByInput,
    handleMaxPriceInput,
    handleMinPriceInput
  };
};

export default useItems;
