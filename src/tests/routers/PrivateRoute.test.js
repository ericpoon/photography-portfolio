import React from 'react';
import { shallow } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';

let wrapper,
  fallbackTo,
  props;
beforeEach(() => {
  fallbackTo = 'fallback url';
  props = { prop1: 'a prop', prop2: 'another prop' };
  wrapper = shallow(
    <PrivateRoute
      {...props}
      isAuthenticated
      fallbackTo={fallbackTo}
    />);
});

describe('if authenticated', () => {
  it('should render private-only route if authenticated', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.name()).toBe('Route');
  });
  it('should pass down props to actual route if authenticated', () => {
    expect(wrapper.props()).toMatchObject(props);
  });
});

describe('if not authenticated', () => {
  beforeEach(() => {
    wrapper.setProps({ isAuthenticated: false });
  });

  it('should render Redirect if not authenticated', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.name()).toBe('Redirect');
  });

  it('should fallback correctly if redirecting', () => {
    expect(wrapper.prop('to')).toBe(fallbackTo);
  });
});

