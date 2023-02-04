import { ENavItem } from '@guitar-shop/front/enums';
import LogoComponent from '../logo/logo';
import NavElement from '../nav-element/nav-element';
import { SocialsComponent } from '../socials/socials';

export const FooterNavElements = [
  ENavItem.WhereToBuy,
  ENavItem.Blog,
  ENavItem.FAQ,
  ENavItem.Return,
  ENavItem.Service,
] as const;

export const FooterComponent = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__container">
        <div className="footer__logo-wrapper"><LogoComponent forFooter />
          <div className="socials footer__socials">
            <SocialsComponent />
          </div>
        </div>
        <section className="footer__nav-section footer__nav-section--about">
          <h2 className="footer__nav-title footer__nav-title--about">О нас</h2>
          <p className="footer__nav-text footer__nav-text--about">
            Магазин гитар, музыкальных <br /> инструментов и&nbsp;гитарная
            мастерская в&nbsp;Санкт-Петербурге.
          </p>
          <p className="footer__nav-text footer__nav-text--about">
            Все инструменты проверены, отстроены и&nbsp;доведены до&nbsp;идеала!
          </p>
        </section>
        <section className="footer__nav-section footer__nav-section--links">
          <h2 className="footer__nav-title footer__nav-title--links">
            Информация
          </h2>
          <ul className="footer__nav-list">
            {FooterNavElements.map((element) => (
              <NavElement key={element} navItem={element} forFooter />
            ))}
          </ul>
        </section>
        <section className="footer__nav-section footer__nav-section--contacts">
          <h2 className="footer__nav-title footer__nav-title--contacts">
            Контакты
          </h2>
          <p className="footer__nav-text footer__nav-text--address">
            г. Санкт-Петербург,
            <br /> м. Невский проспект, ул. Казанская 6.
          </p>
          <a
            className="link footer__nav-link footer__nav-link--phone"
            href="tel:88125005050"
          >
            8-812-500-50-50
          </a>
          <p className="footer__nav-text footer__nav-text--work-hours-title">
            Режим работы:
            <span className="footer__nav-text footer__nav-text--work-hours">
              с 11:00 до 20:00
            </span>
          </p>
          <p className="footer__nav-text footer__nav-text--weekends">
            без выходных
          </p>
        </section>
      </div>
    </div>
  </footer>
);

export default FooterComponent;
