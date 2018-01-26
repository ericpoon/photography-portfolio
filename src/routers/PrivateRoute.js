import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Route from './Route';

export const PrivateRoute = (props) => {
  const {
    isAuthenticated, fallbackTo, ...restProps
  } = props;
  if (isAuthenticated) return <Route {...restProps} />;
  return <Redirect to={fallbackTo} />;
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRoute);
