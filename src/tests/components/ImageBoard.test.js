import React from 'react';
import { shallow } from 'enzyme';
import ImageBoard from '../../components/ImageBoard';

let wrapper;

beforeEach(() => {
  const MockImageCard = jest.fn(() => (<div />));
  wrapper = shallow(
    <ImageBoard>
      <MockImageCard />
      <MockImageCard />
      <MockImageCard />
    </ImageBoard>);
});

it('should render ImageCardCollection', () => {
  expect(wrapper).toMatchSnapshot();
});
