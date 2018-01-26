import React from 'react';
import { shallow } from 'enzyme';
import { PublicRoute } from '../../routers/PublicRoute';

let wrapper,
  fallbackTo,
  props;
beforeEach(() => {
  fallbackTo = 'fallback url';
  props = { prop1: 'a prop', prop2: 'another prop' };
  wrapper = shallow(
    <PublicRoute
      {...props}
      isAuthenticated
      fallbackTo={fallbackTo}
    />);
});

describe('if authenticated', () => {
  it('should render Redirect if authenticated', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.name()).toBe('Redirect');
  });

  it('should fallback correctly if redirecting', () => {
    expect(wrapper.prop('to')).toBe(fallbackTo);
  });
});

describe('if not authenticated', () => {
  beforeEach(() => {
    wrapper.setProps({ isAuthenticated: false });
  });

  it('should render public-only route if not authenticated', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.name()).toBe('Route');
  });
  it('should pass down props to actual route if not authenticated', () => {
    expect(wrapper.props()).toMatchObject(props);
  });
});
