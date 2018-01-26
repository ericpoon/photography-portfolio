import React from 'react';
import { shallow } from 'enzyme';
import VisitorHeader from '../../components/VisitorHeader';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<VisitorHeader />);
});

it('should render Header correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
