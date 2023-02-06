import { AppRoute } from '@guitar-shop/front/enums';
import { Link } from 'react-router-dom';

export const LogoComponent = ({
  forFooter = false,
}: {
  forFooter?: boolean;
}) => (
  <Link
    className={`${forFooter ? 'footer__logo' : 'header__logo'} logo`}
    to={AppRoute.Main}
  >
    <img
      className="logo__img"
      width="70"
      height="70"
      src="./assets/img/svg/logo.svg"
      alt="Логотип"
    ></img>
  </Link>
);

export default LogoComponent;
