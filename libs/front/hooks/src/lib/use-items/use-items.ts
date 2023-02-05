import { getItemsState, setMaxPriceAction, setMinPriceAction, setPageAction, setSortAction, toggleGuitarTypeAction, toggleStringCountAction } from '@guitar-shop/front/store';
import { GuitarType, StringCount } from '@prisma/client';
import { useCallback } from 'react';
import useAppDispatch from '../use-app-dispatch/use-app-dispatch';
import useAppSelector from '../use-app-selector/use-app-selector';
import { ESortBy } from '@guitar-shop/front/enums';

export const useItems = () => {
  const {data: items, guitarTypes, stringCounts, page, minPrice, maxPrice} = useAppSelector(getItemsState);

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
    (sortBy: ESortBy) => {
      dispatch(setSortAction(sortBy));
    }, [dispatch]
  );

  return {
    items,
    guitarTypes,
    stringCounts,
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
