import { HistoryRouterProps } from '@guitar-shop/front/types';
import { useState, useLayoutEffect } from 'react';
import { Router } from 'react-router-dom';

export const HistoryRouter = ({
  basename,
  children,
  history,
}: HistoryRouterProps) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
};
