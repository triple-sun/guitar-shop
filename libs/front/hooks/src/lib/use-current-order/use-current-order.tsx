import { AppRoute } from '@guitar-shop/front/enums';
import { fetchCurrentOrderAction, getAllOrders, getCurrentOrder, getReviews } from '@guitar-shop/front/store';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../use-app-dispatch/use-app-dispatch';
import { useAppSelector } from '../use-app-selector/use-app-selector';

export const useCurrentOrder = (id: number) => {
  const [isLoading, setIsLoading] = useState(false);

  const order = useAppSelector(getCurrentOrder);
  const allOrders = useAppSelector(getAllOrders);

  const isIdValid = allOrders.map((item) => item.id).includes(id)

  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    if (!isIdValid) {
      navigate(AppRoute.NotFound)
    }

    if (!order && isIdValid) {
      dispatch(fetchCurrentOrderAction(id))
      setIsLoading(true)
    }

    if (order) {
      setIsLoading(false)
    }
  }, [dispatch, id, isIdValid, order, navigate]);

  return {
    order,
    isLoading
  };
};
