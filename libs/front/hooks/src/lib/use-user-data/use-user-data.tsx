import { useCallback } from 'react';
import useAppSelector from '../use-app-selector/use-app-selector';
import useAppDispatch from '../use-app-dispatch/use-app-dispatch'
import { getUserState, loginAction, logoutAction } from '@guitar-shop/front/store';
import { EAuthStatus } from '@guitar-shop/front/enums';
import { TUser } from '@guitar-shop/front/types';

export const useUserData = () => {
  const {authStatus, userInfo} = useAppSelector(getUserState);

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


  return {
    isAuth,
    userInfo,
    handleLoginSubmit,
    handleLogoutClick,
  };
};

export default useUserData;
