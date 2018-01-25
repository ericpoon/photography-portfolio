import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NotFoundPage from '../components/NotFoundPage';
import HomePage from '../components/HomePage';
import LoginPage from '../components/LoginPage';
import PortfolioPage from '../components/PortfolioPage';
import AdminPage from '../components/AdminPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import RouteWithHeader from './RouteWithHeader';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path={'/'} component={HomePage} exact />
        <RouteWithHeader path={'/portfolio'} component={PortfolioPage} exact />
        <PublicRoute path={'/login'} component={LoginPage} exact />
        {/* /admin should be private */}
        <RouteWithHeader path={'/admin'} component={AdminPage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
