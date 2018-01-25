import React from 'react';
import { shallow } from 'enzyme';
import ImageCardCollection from '../../components/ImageCardCollection';
import { ImageCard } from '../../components/ImageCard';

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <ImageCardCollection>
      <ImageCard />
      <ImageCard />
      <ImageCard />
    </ImageCardCollection>);
});

it('should render ImageCardCollection', () => {
  expect(wrapper).toMatchSnapshot();
});
