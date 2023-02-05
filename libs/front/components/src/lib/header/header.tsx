import { EAppRoute, ENavItem } from '@guitar-shop/front/enums';
import { useUserData } from '@guitar-shop/front/hooks';
import { MouseEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import LogoComponent from '../logo/logo';
import NavElement from '../nav-element/nav-element';
import { getHeaderClass } from '@guitar-shop/front/utils';

export const MainNavElements = {
  User: [ENavItem.Catalog, ENavItem.WhereToBuy, ENavItem.About] as const,
  Admin: [ENavItem.Catalog, ENavItem.Orders, ENavItem.Items] as const,
};

export const HeaderComponent = () => {
  const {isAuth, userInfo, cart, handleLogoutClick} = useUserData()

  const isAdmin = userInfo?.isAdmin;
  const name = userInfo?.name;
  
  const itemsCount = Object.values(cart).length
  const headerClass = getHeaderClass(isAuth, isAdmin, itemsCount)

  const navigate = useNavigate()

  const onLoginClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault()
    isAuth
      ? handleLogoutClick()
      : navigate(EAppRoute.Login)
  }

  return (
      <header className={headerClass} id="header">
        <div className="container">
          <div className="header__wrapper">
            <LogoComponent />
            <nav className="main-nav">
              <ul className="main-nav__list">
                {
                  isAdmin
                    ? MainNavElements.User.map((element) => (
                      <NavElement key={element} navItem={element}/>
                      ))
                    : MainNavElements.Admin.map((element) => (
                      <NavElement key={element} navItem={element}/>
                    ))
                }
              </ul>
            </nav>
            <div className="header__container">
              <span className="header__user-name">{name}</span>
              <Link className="header__link" to={EAppRoute.Login} aria-label="Перейти в личный кабинет" onClick={onLoginClick}>
                <svg
                  className="header__link-icon"
                  width="12"
                  height="14"
                  aria-hidden="true"
                >
                  <use xlinkHref="#icon-account" />
                </svg>
                <span className="header__link-text">{isAuth ? 'Выход' : 'Вход'}</span>
              </Link>
              <Link
                className="header__cart-link"
                to={EAppRoute.Cart}
                aria-label="Перейти в корзину"
              >
                <svg
                  className="header__cart-icon"
                  width="14"
                  height="14"
                  aria-hidden="true"
                >
                  <use xlinkHref="#icon-basket" />
                </svg>
                <span className="header__cart-count">{itemsCount}</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
  );
};

export default HeaderComponent;

