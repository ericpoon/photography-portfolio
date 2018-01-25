import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import HomePage from '../components/HomePage';
import PortfolioPage from '../components/PortfolioPage';
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
        {/* <PublicRoute path={'/'} component={HomePage} exact /> */}
        {/* <PrivateRoute path={'/dashboard'} component={DashboardPage} exact /> */}
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
