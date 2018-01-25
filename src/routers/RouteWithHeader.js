import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header';

const RouteWithHeader = (props) => {
  const { component: Component, ...restProps } = props;
  const ActualComponent = (componentProps) => {
    return (
      <div>
        <Header />
        <Component {...componentProps} />
      </div>
    );
  };

  return <Route {...restProps} component={ActualComponent} />;
};

export default RouteWithHeader;
