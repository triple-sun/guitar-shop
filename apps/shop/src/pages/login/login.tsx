
import { LoginFormComponent, PageComponent } from '@guitar-shop/front/components';
import { AppRoute } from '@guitar-shop/front/enums';
import { useUserData } from '@guitar-shop/front/hooks';
import { Link, Navigate } from 'react-router-dom';

export const LoginPage = () => {
  const {isAuth, handleLoginSubmit} = useUserData();

  return !isAuth
    ? (
        <main className="page-content">
          <div className="container">
            <section className="login">
              <h1 className="login__title">Войти</h1>
              <p className="login__text">Hовый пользователь? <Link className="login__link" to={AppRoute.Registration}>Зарегистрируйтесь</Link> прямо сейчас</p>
              <LoginFormComponent handleLoginSubmit={handleLoginSubmit}/>
            </section>
          </div>
        </main>
      )
    : <Navigate to={AppRoute.Main} />
};
