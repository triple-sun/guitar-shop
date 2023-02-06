import { useCallback } from 'react';
import { addToCartAction, decreaseCountAction, getAuthStatus, getToken, getUserCart, getUserInfo, increaseCountAction, loginAction, logoutAction, removeFromCartAction } from '@guitar-shop/front/store';
import { AuthStatus } from '@guitar-shop/front/enums';
import { TGuitar, TUser } from '@guitar-shop/front/types';
import { useAppSelector } from '../use-app-selector/use-app-selector';
import { useAppDispatch } from '../use-app-dispatch/use-app-dispatch';

export const useUserData = () => {
  const authStatus = useAppSelector(getAuthStatus)
  const userInfo = useAppSelector(getUserInfo)
  const cart = useAppSelector(getUserCart)

  const hasToken = !!getToken()
  const isAdmin = userInfo ? userInfo.isAdmin : false
  const isAuth = authStatus === AuthStatus.Auth

  const dispatch = useAppDispatch();

  const handleLoginSubmit = useCallback(
    (authData: Pick<TUser, 'email' | 'password'>) => {
      dispatch(loginAction(authData));
    }, [dispatch]);

  const handleLogoutClick = useCallback(
    () => {
      dispatch(logoutAction());
    }, [dispatch]);

    const handleAddToCart = useCallback(
    (item: TGuitar) => {
      dispatch(addToCartAction(item));
    }, [dispatch]);

  const handleRemoveFromCart = useCallback(
    (id: number) => {
      dispatch(removeFromCartAction(id))
    }, [dispatch]
  )

  const handleIncreaseCount = useCallback(
    (id: number) => {
      dispatch(increaseCountAction(id))
    }, [dispatch]
  )

  const handleDecreaseCount = useCallback(
    (id: number) => {
      dispatch(decreaseCountAction(id))
    }, [dispatch]
  )

  return {
    isAuth,
    isAdmin,
    hasToken,
    userInfo,
    cart,
    handleLoginSubmit,
    handleLogoutClick,
    handleAddToCart,
    handleRemoveFromCart,
    handleDecreaseCount,
    handleIncreaseCount
  };
};

export default useUserData;
