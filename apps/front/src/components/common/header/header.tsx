import React, { CSSProperties, PropsWithChildren } from 'react';

const HEADER_STYLE: CSSProperties = {
  marginLeft: '-40px',
  width: '1020px'
}

const HeaderComponent = ({children}: PropsWithChildren) => (
  <div style={HEADER_STYLE}>
    <header className="header" id="header">
      <div className="container">
        <div className="header__wrapper"><a className="header__logo logo" href="main.html"><img className="logo__img" width="70" height="70" src="./img/svg/logo.svg" alt="Логотип"></img></a>
          <nav className="main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item"><a className="link main-nav__link" href="#">Каталог</a></li>
              <li className="main-nav__item"><a className="link main-nav__link" href="#">Где купить?</a></li>
              <li className="main-nav__item"><a className="link main-nav__link" href="#">О компании</a></li>
            </ul>
          </nav>
          {children}
        </div>
      </div>
    </header>
  </div>
);

export default React.memo(HeaderComponent)




