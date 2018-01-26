import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = (props) => {
  const {
    isAuthenticated, component: Component, header: Header, redirectTo, ...restProps
  } = props;
  const ActualComponent = (componentProps) => {
    if (isAuthenticated) {
      if (Header) {
        return (
          <div>
            <Header />
            <Component {...componentProps} />
          </div>
        );
      }
      return <Component {...componentProps} />;
    }
    return <Redirect to={redirectTo} />;
  };

  return <Route {...restProps} component={ActualComponent} />;
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRoute);
