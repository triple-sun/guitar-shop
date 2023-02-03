import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import HistoryRouter from './components/history-router/history-router';
import { ToastContainer } from 'react-toastify'
import browserHistory from './browser-history';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

browserHistory.listen(() => {
  window.scrollTo(0, 0);
});

root.render(
  <React.StrictMode>
    <HistoryRouter history={browserHistory}>
      <ToastContainer />
      <App />
    </HistoryRouter>
  </React.StrictMode>,
);
