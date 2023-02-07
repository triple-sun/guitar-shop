import { AppRoute } from '@guitar-shop/front/enums';
import { useAppDispatch } from '@guitar-shop/front/hooks';
import {
  fetchCurrentItemAction,
  fetchCurrentOrderAction,
} from '@guitar-shop/front/store';
import { Route, Routes } from 'react-router-dom';
import { CartPage } from '../pages/cart/cart';
import { CatalogPage } from '../pages/catalog/catalog';
import { ItemList } from '../pages/item-list/item-list';
import { ItemPage } from '../pages/item/item';
import { LoginPage } from '../pages/login/login';
import { NotFoundPage } from '../pages/not-found/not-found';
import { OrderPage } from '../pages/order/order';
import { OrdersListPage } from '../pages/orders-list/orders-list';
import { RegistrationPage } from '../pages/registration/registration';

export const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <Routes>
      <Route path={AppRoute.Main}>
        <Route index element={<CatalogPage />} />

        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Registration} element={<RegistrationPage />} />
        <Route path={AppRoute.Cart} element={<CartPage />} />
        <Route
          path={AppRoute.Item}
          element={<ItemPage />}
          loader={({ params }) =>
            dispatch(fetchCurrentItemAction(Number(params.id)))
          }
        />
        <Route path={AppRoute.Orders} element={<OrdersListPage />} />
        <Route
          path={AppRoute.Order}
          element={<OrderPage />}
          loader={({ params }) =>
            dispatch(fetchCurrentOrderAction(Number(params.id)))
          }
        />
        <Route path={AppRoute.Items} element={<ItemList />} />
      </Route>
      <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
