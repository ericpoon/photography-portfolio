import React from 'react';
import { shallow } from 'enzyme';
import { AdminHeader } from '../../components/AdminHeader';

let wrapper,
  startLogout;

beforeEach(() => {
  startLogout = jest.fn();
  wrapper = shallow(<AdminHeader startLogout={startLogout} />);
});

it('should render Header correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should call startLogout on button click', () => {
  wrapper.find('button').at(1).simulate('click');
  expect(startLogout).toHaveBeenCalled();
});
