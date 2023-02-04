import { EAppRoute, ENavItem } from '@guitar-shop/front/enums';
import { Link } from 'react-router-dom';

import LogoComponent from '../logo/logo';
import NavElement from '../nav-element/nav-element';

type THeaderProps = {
  isLogged?: boolean;
  isAdmin?: boolean;
  items?: number;
};

export const MainNavElements = {
  User: [ENavItem.Catalog, ENavItem.WhereToBuy, ENavItem.About] as const,
  Admin: [ENavItem.Catalog, ENavItem.Orders, ENavItem.Items] as const,
};

export const HeaderComponent = ({
  isAdmin = false,
  isLogged = false,
  items = 0,
}: THeaderProps) => {
  const itemsClass = items === 0 ? '-empty' : '';
  const loggedClass = isAdmin ? 'admin' : `logged${itemsClass}`;
  const headerClass = `${isLogged ? `header--${loggedClass}` : ''} header`;

  return (
      <header className={headerClass} id="header">
        <div className="container">
          <div className="header__wrapper">
            <LogoComponent />
            <nav className="main-nav">
              <ul className="main-nav__list">
                {isAdmin
                  ? MainNavElements.Admin.map((element) => (
                      <NavElement key={element} navItem={element}/>
                    ))
                  : MainNavElements.User.map((element) => (
                      <NavElement key={element} navItem={element}/>
                    ))}
              </ul>
            </nav>
            <div className="header__container">
              <span className="header__user-name">Имя</span>
              <Link
                className="header__link"
                to={EAppRoute.Login}
                aria-label="Перейти в личный кабинет"
              >
                <svg
                  className="header__link-icon"
                  width="12"
                  height="14"
                  aria-hidden="true"
                >
                  <use xlinkHref="#icon-account" />
                </svg>
                <span className="header__link-text">Вход</span>
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
                <span className="header__cart-count">{items}</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
  );
};

export default HeaderComponent;

