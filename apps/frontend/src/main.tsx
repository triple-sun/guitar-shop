import ReactDOM from 'react-dom/client';
import { HistoryRouter } from './history-router/history-router';
import {
  browserHistory,
  getToken,
  SetAuthAction,
  store,
} from '@guitar-shop/front/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './app/app';
import {
  FooterComponent,
  HeaderComponent,
} from '@guitar-shop/front/components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

if (getToken()) {
  store.dispatch(SetAuthAction());
}

browserHistory.listen(() => {
  window.scrollTo(0, 0);
});

root.render(
  <Provider store={store}>
    <HistoryRouter history={browserHistory}>
      <ToastContainer theme="colored" />
      <HeaderComponent />
      <App />
      <FooterComponent />
    </HistoryRouter>
  </Provider>
);
