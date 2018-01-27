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

it('has a unrestricted route for 404 fallback page', () => {
  const route = routes.filterWhere(n => !n.prop('path'));
  expect(route).toHaveLength(1);
  expect(route.name()).toBe('Route');
});

it('has a unrestricted route for home page', () => {
  const route = routes.filterWhere(n => n.prop('path') === '/');
  expect(route).toHaveLength(1);
  expect(route.name()).toBe('Route');
});

it('has a unrestricted route for portfolio page', () => {
  const route = routes.filterWhere(n => n.prop('path') === '/portfolio');
  expect(route).toHaveLength(1);
  expect(route.name()).toBe('Route');
});

it('has a public route for login page, with fallback url specified', () => {
  const route = routes.filterWhere(n => n.prop('path') === '/login');
  expect(route).toHaveLength(1);
  expect(route.name()).toBe('Connect(PublicRoute)');
  expect(route.prop('fallbackTo')).toBe('/admin');
});

it('has a private route for admin page, with fallback url specified', () => {
  const route = routes.filterWhere(n => n.prop('path') === '/admin');
  expect(route).toHaveLength(1);
  expect(route.name()).toBe('Connect(PrivateRoute)');
  expect(route.prop('fallbackTo')).toBe('/login');
});

it('has a private route for add image page, with fallback url specified', () => {
  const route = routes.filterWhere(n => n.prop('path') === '/add');
  expect(route).toHaveLength(1);
  expect(route.name()).toBe('Connect(PrivateRoute)');
  expect(route.prop('fallbackTo')).toBe('/login');
});
