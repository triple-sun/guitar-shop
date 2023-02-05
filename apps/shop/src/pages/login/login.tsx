
import { LoginFormComponent, PageComponent } from '@guitar-shop/front/components';
import { EAppRoute } from '@guitar-shop/front/enums';
import { useUserData } from '@guitar-shop/front/hooks';
import { Link, Navigate } from 'react-router-dom';

export const LoginPage = () => {
  const {isAuth, handleLoginSubmit} = useUserData();

  return !isAuth
    ? (
      <PageComponent>
          <div className="container">
            <section className="login">
              <h1 className="login__title">Войти</h1>
              <p className="login__text">Hовый пользователь? <Link className="login__link" to={EAppRoute.Register}>Зарегистрируйтесь</Link> прямо сейчас</p>
              <LoginFormComponent handleLoginSubmit={handleLoginSubmit}/>
            </section>
          </div>
      </PageComponent>
      )
    : <Navigate to={EAppRoute.Main} />
};

export default LoginPage;
