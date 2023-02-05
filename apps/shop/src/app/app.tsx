import { EAppRoute } from '@guitar-shop/front/enums';
import { Route, Routes } from 'react-router-dom'
import { CartPage } from '../pages/cart/cart';
import CatalogPage from '../pages/catalog/catalog';
import LoginPage from '../pages/login/login';
import { NotFoundPage } from '../pages/not-found/not-found';

export const App = (): JSX.Element => {
  return (
    <Routes>
        <Route path={EAppRoute.Main}>

          <Route index element={<CatalogPage />} />

          <Route path={EAppRoute.Login} element={<LoginPage />} />
          <Route path={EAppRoute.Cart} element={<CartPage />} />
          <Route path={EAppRoute.Register} />
        </Route>
      <Route path={EAppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
  );
}

export default App;
