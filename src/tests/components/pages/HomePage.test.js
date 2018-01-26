import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../../components/pages/HomePage';

let wrapper,
  history;

beforeEach(() => {
  history = { push: jest.fn() };
  wrapper = shallow(<HomePage history={history} />);
});

it('should render HomePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should go to portfolio page after clicking enter button', () => {
  wrapper.find('button').at(0).simulate('click');
  expect(history.push).toHaveBeenCalledWith('/portfolio');
});

it('should go to login page after clicking login button', () => {
  wrapper.find('button').at(1).simulate('click');
  expect(history.push).toHaveBeenCalledWith('/login');
});
