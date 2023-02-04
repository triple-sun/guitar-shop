import { EAppRoute } from '@guitar-shop/front/enums';
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/login/login';
import MainPage from '../pages/main/main';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={EAppRoute.Main}>

      <Route index element={<MainPage />} />

      <Route path={EAppRoute.Login} element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
