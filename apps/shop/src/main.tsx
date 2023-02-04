import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import { ToastContainer } from 'react-toastify'
import { HistoryRouter } from './history-router/history-router';
import { browserHistory, fetchItemsAction, store } from '@guitar-shop/front/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(fetchItemsAction({}));

browserHistory.listen(() => {
  window.scrollTo(0, 0);
});

root.render(
  <React.StrictMode>
  <Provider store={store}>
    <HistoryRouter history={browserHistory}>
      <ToastContainer />
      <App />
    </HistoryRouter>
  </Provider>
  </React.StrictMode>,
);
