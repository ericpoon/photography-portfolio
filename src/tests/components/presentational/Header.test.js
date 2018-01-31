import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../components/presentational/Header';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Header />);
});

it('should render Header correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
