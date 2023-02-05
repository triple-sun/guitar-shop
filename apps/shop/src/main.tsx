import ReactDOM from 'react-dom/client';
import { HistoryRouter } from './history-router/history-router';
import {
  browserHistory,
  fetchItemsAction,
  getToken,
  setAuthAction,
  store,
} from '@guitar-shop/front/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchItemsAction({}));

if (getToken()) {
  store.dispatch(setAuthAction())
}

browserHistory.listen(() => {
  window.scrollTo(0, 0);
});

root.render(
  <Provider store={store}>
    <HistoryRouter history={browserHistory}>
      <ToastContainer theme='colored' />
        <App />
    </HistoryRouter>
  </Provider>
);
