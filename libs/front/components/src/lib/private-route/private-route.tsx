import { EAppRoute, EAuthStatus } from '@guitar-shop/front/enums';
import { useAppSelector } from '@guitar-shop/front/hooks';
import { getAuthStatus } from '@guitar-shop/front/store';
import React from 'react';
import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  children: JSX.Element;
}

const PrivateRoute = ({children}: PropsWithChildren<PrivateRouteProps>) => (
  useAppSelector(getAuthStatus) === EAuthStatus.Auth
    ? children
    : <Navigate to={EAppRoute.Login} />
);

export default React.memo(PrivateRoute);
