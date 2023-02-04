import { EAppRoute, ENavItem } from '@guitar-shop/front/enums';
import { Link } from 'react-router-dom';

export const NavElement = ({
  navItem,
  forFooter = false,
}: {
  navItem: ENavItem;
  forFooter?: boolean;
}) => (
  <li className={`${forFooter ? 'footer__nav-list-item' : 'main-nav__item'}`}>
    <Link
      to={EAppRoute.Main}
      className={`link ${forFooter ? 'footer__nav-link' : 'main-nav__link'}`}
    >
      {navItem}
    </Link>
  </li>
);

export default NavElement;
