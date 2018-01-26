import React from 'react';
import { shallow } from 'enzyme';
import AppRouter from '../../routers/AppRouter';

let wrapper,
  routes;

beforeEach(() => {
  wrapper = shallow(<AppRouter />);
  routes = wrapper.find('Switch').children();
});

it('renders AppRouter', () => {
  expect(wrapper).toMatchSnapshot();
});

it('has a route for 404 fallback page', () => {
  expect(routes.filterWhere(n => !n.prop('path'))).toHaveLength(1);
});

it('has a route for home page', () => {
  expect(routes.filterWhere(n => n.prop('path') === '/')).toHaveLength(1);
});

it('has a route for login page', () => {
  expect(routes.filterWhere(n => n.prop('path') === '/login')).toHaveLength(1);
});

it('has a route for portfolio page', () => {
  expect(routes.filterWhere(n => n.prop('path') === '/portfolio')).toHaveLength(1);
});

it('has a route for admin page', () => {
  expect(routes.filterWhere(n => n.prop('path') === '/admin')).toHaveLength(1);
});
