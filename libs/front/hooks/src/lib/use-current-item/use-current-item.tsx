import { fetchCurrentItemAction, getAllItems, getCurrentItem, getReviews } from '@guitar-shop/front/store';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../use-app-dispatch/use-app-dispatch';
import { useAppSelector } from '../use-app-selector/use-app-selector';

export const useCurrentItem = (id: number) => {
  const [isLoading, setIsLoading] = useState(false);

  const item = useAppSelector(getCurrentItem);
  const allItems = useAppSelector(getAllItems);

  const reviews = useAppSelector(getReviews);

  const isIdValid = allItems.map((item) => item.id).includes(id)

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!item && isIdValid) {
      dispatch(fetchCurrentItemAction(id))
      setIsLoading(true)
    }

    if (item) {
      setIsLoading(false)
    }
  }, [dispatch, id, isIdValid, isLoading, item]);

  return {
    item,
    reviews,
    isLoading
  };
};
