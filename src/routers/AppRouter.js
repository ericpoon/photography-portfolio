import React from 'react';
import { Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import HomePage from '../components/HomePage';
import LoginPage from '../components/LoginPage';
import PortfolioPage from '../components/PortfolioPage';
import AdminPage from '../components/AdminPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Route from './Route';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route
          path={'/'}
          component={HomePage}
          exact
        />
        <Route
          path={'/portfolio'}
          component={PortfolioPage}
          header={Header}
          exact
        />
        <PublicRoute
          path={'/login'}
          component={LoginPage}
          redirectTo={'/admin'}
          exact
        />
        <PrivateRoute
          path={'/admin'}
          component={AdminPage}
          header={Header}
          redirectTo={'/login'}
          exact
        />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
