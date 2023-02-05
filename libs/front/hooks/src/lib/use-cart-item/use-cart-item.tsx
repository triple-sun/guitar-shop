import { increaseCountAction, removeFromCartAction, decreaseCountAction, addToCartAction } from '@guitar-shop/front/store';
import { TGuitar } from '@guitar-shop/front/types';
import { useCallback, useEffect, useState } from 'react';
import useAppDispatch from '../use-app-dispatch/use-app-dispatch';

export const useCartItem = (item: TGuitar, count = 1) => {
  const [itemCount, setItemCount] = useState<number>(count)
  const [totalPrice, setTotalPrice] = useState<number>()

  const dispatch = useAppDispatch();

  const handleAddToCart = useCallback(
    (item: TGuitar) => {
      dispatch(addToCartAction(item));
    }, [dispatch]);

  const handleIncreaseCount = useCallback(
    (id: number) => {
      dispatch(increaseCountAction(id))

      if (itemCount < 99){
        setItemCount(itemCount + 1)
      }
    }, [dispatch, itemCount]
  )

  const handleDecreaseCount = useCallback(
    (id: number) => {
      dispatch(decreaseCountAction(id))
      setItemCount(itemCount - 1)
    }, [dispatch, itemCount]
  )

  const handleRemoveFromCart = useCallback(
    (id: number) => {
      dispatch(removeFromCartAction(id))
      setItemCount(0)
    }, [dispatch]
  )

  useEffect(() => {
    setTotalPrice((item.price * itemCount))
  }, [count, item.price, itemCount])

  return {
    totalPrice,
    setTotalPrice,
    itemCount,
    setItemCount,
    handleAddToCart,
    handleDecreaseCount,
    handleIncreaseCount,
    handleRemoveFromCart
  };
};
