
import { LoginComponent, PageComponent, } from '@guitar-shop/front/components';
import { EAppRoute } from '@guitar-shop/front/enums';
import { useUserData } from '@guitar-shop/front/hooks';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const {isAuth, handleLoginSubmit} = useUserData();

  return !isAuth
    ? (
      <PageComponent>
        <LoginComponent handleLoginSubmit={handleLoginSubmit}/>
      </PageComponent>
      )
    : <Navigate to={EAppRoute.Main} />
};

export default LoginPage;
