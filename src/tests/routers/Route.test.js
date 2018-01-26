import React from 'react';
import { shallow } from 'enzyme';
import Route from '../../routers/Route';

let wrapper,
  Header,
  Component,
  props;

beforeEach(() => {
  Header = jest.fn(() => (<div className={'header'} />));
  Component = jest.fn(() => (<div className={'component'} />));
  props = { prop1: 'a prop', prop2: 'another prop' };
  wrapper = shallow(
    <Route
      header={Header}
      component={Component}
      {...props}
    />);
});

describe('with Header provided', () => {
  it('renders Route', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have Header in Route', () => {
    const routeComponentWrapper = shallow(wrapper.prop('component')());
    expect(
      routeComponentWrapper
        .children()
        .map(c => c.dive())
        .filter(c => c.equals(Header())))
      .toHaveLength(1);
  });

  it('should have Component in Route', () => {
    const routeComponentWrapper = shallow(wrapper.prop('component')());
    expect(
      routeComponentWrapper
        .children()
        .map(c => c.dive())
        .filter(c => c.equals(Component())))
      .toHaveLength(1);
  });

  it('should pass props to native Route from react-router-dom', () => {
    expect(wrapper.props()).toMatchObject(props);
  });
});

describe('without Header provided', () => {
  beforeEach(() => {
    wrapper.setProps({ header: null });
  });

  it('should not have Header in Route', () => {
    const routeComponentWrapper = shallow(wrapper.prop('component')());
    expect(
      routeComponentWrapper
        .children()
        .map(c => c.dive())
        .filter(c => c.equals(Header())))
      .toHaveLength(0);
  });

  it('should have Component in Route', () => {
    const routeComponentWrapper = shallow(wrapper.prop('component')());
    expect(routeComponentWrapper.equals(Component())).toBeTruthy();
  });

  it('should pass props to native Route from react-router-dom', () => {
    expect(wrapper.props()).toMatchObject(props);
  });
});

