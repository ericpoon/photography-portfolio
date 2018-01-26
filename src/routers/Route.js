import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithHeader = (props) => {
  const { component: Component, header: Header, ...restProps } = props;
  const ActualComponent = (componentProps) => {
    if (Header) {
      return (
        <div>
          <Header />
          <Component {...componentProps} />
        </div>
      );
    }
    return <Component {...componentProps} />;
  };

  return <Route {...restProps} component={ActualComponent} />;
};

export default RouteWithHeader;
