import React from 'react';
import { shallow } from 'enzyme';
import ImageCardCollection from '../../components/ImageCardCollection';

let wrapper;

beforeEach(() => {
  const MockImageCard = jest.fn(() => (<div />));
  wrapper = shallow(
    <ImageCardCollection>
      <MockImageCard />
      <MockImageCard />
      <MockImageCard />
    </ImageCardCollection>);
});

it('should render ImageCardCollection', () => {
  expect(wrapper).toMatchSnapshot();
});
