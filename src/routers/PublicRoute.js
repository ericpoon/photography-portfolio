import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Route from './Route';

export const PublicRoute = (props) => {
  const {
    isAuthenticated, fallbackTo, ...restProps
  } = props;
  if (isAuthenticated) return <Redirect to={fallbackTo} />;
  return <Route {...restProps} />;
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PublicRoute);
