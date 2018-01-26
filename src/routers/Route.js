import React from 'react';
import { Route as NativeRoute } from 'react-router-dom';

const Route = (props) => {
  const { component: Component, header: Header, ...restProps } = props;
  const RouteComponent = (componentProps) => {
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

  return <NativeRoute {...restProps} component={RouteComponent} />;
};

export default Route;
