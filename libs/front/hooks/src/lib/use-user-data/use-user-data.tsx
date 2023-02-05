import { useCallback, useLayoutEffect } from 'react';
import useAppSelector from '../use-app-selector/use-app-selector';
import useAppDispatch from '../use-app-dispatch/use-app-dispatch'
import { increaseCountAction, getToken, getUserState, loginAction, logoutAction, setAuthAction } from '@guitar-shop/front/store';
import { AuthStatus } from '@guitar-shop/front/enums';
import { TGuitar, TUser } from '@guitar-shop/front/types';

export const useUserData = () => {
  const {authStatus, userInfo, cart} = useAppSelector(getUserState);

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

  return {
    isAuth,
    isAdmin,
    hasToken,
    userInfo,
    cart,
    handleLoginSubmit,
    handleLogoutClick
  };
};

export default useUserData;
