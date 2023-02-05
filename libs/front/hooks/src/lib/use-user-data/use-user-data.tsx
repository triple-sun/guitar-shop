import { useCallback } from 'react';
import useAppSelector from '../use-app-selector/use-app-selector';
import useAppDispatch from '../use-app-dispatch/use-app-dispatch'
import { addToCartAction, getUserState, loginAction, logoutAction } from '@guitar-shop/front/store';
import { EAuthStatus } from '@guitar-shop/front/enums';
import { TGuitar, TUser } from '@guitar-shop/front/types';

export const useUserData = () => {
  const {authStatus, userInfo, cart} = useAppSelector(getUserState);

  const isAuth = authStatus === EAuthStatus.Auth

  const dispatch = useAppDispatch();

  const handleLoginSubmit = useCallback(
    (authData: Pick<TUser, 'email' | 'password'>) => {
      dispatch(loginAction(authData));
    }, [dispatch]);

  const handleLogoutClick = useCallback(
    () => {
      dispatch(logoutAction());
    }, [dispatch]);

  const handleAddToCartClick = useCallback(
    (item: TGuitar) => {
      dispatch(addToCartAction(item));
    }, [dispatch]);

  return {
    isAuth,
    userInfo,
    cart,
    handleLoginSubmit,
    handleLogoutClick,
    handleAddToCartClick
  };
};

export default useUserData;
