import React from 'react';
import { Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AdminHeader from '../components/AdminHeader';
import VisitorHeader from '../components/VisitorHeader';
import NotFoundPage from '../components/pages/NotFoundPage';
import HomePage from '../components/pages/HomePage';
import LoginPage from '../components/pages/LoginPage';
import PortfolioPage from '../components/pages/PortfolioPage';
import AdminPage from '../components/pages/AdminPage';
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
          header={VisitorHeader}
          exact
        />
        <PublicRoute
          path={'/login'}
          component={LoginPage}
          fallbackTo={'/admin'}
          exact
        />
        <PrivateRoute
          path={'/admin'}
          component={AdminPage}
          header={AdminHeader}
          fallbackTo={'/login'}
          exact
        />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
