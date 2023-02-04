import { getItemsState, setMaxPrice, setMinPrice, setPage, setSort, toggleGuitarType, toggleStringCount } from '@guitar-shop/front/store';
import { GuitarType, StringCount } from '@prisma/client';
import { useCallback } from 'react';
import useAppDispatch from '../use-app-dispatch/use-app-dispatch';
import useAppSelector from '../use-app-selector/use-app-selector';
import { ESortBy } from '@guitar-shop/front/enums';

export const useItems = () => {
  const {data: items, guitarTypes, stringCounts, page} = useAppSelector(getItemsState);

  const dispatch = useAppDispatch();

  const handlePageInput = useCallback(
    (page: number) => {
      dispatch(setPage(page));
    }, [dispatch],
  );

  const handleGuitarTypeInput = useCallback(
    (type: keyof typeof GuitarType) => {
      dispatch(toggleGuitarType(type));
    }, [dispatch]
  );

  const handleStringsCountInput = useCallback(
    (count: StringCount) => {
      dispatch(toggleStringCount(count));
    }, [dispatch]
  );

  const handleMaxPriceInput = useCallback(
    (price: number) => {
      dispatch(setMaxPrice(price));
    }, [dispatch]
  );

  const handleMinPriceInput = useCallback(
    (price: number) => {
      dispatch(setMinPrice(price));
    }, [dispatch]
  );

  const handleItemsSortByInput = useCallback(
    (sortBy: ESortBy) => {
      dispatch(setSort(sortBy));
    }, [dispatch]
  );

  return {
    items,
    guitarTypes,
    stringCounts,
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
