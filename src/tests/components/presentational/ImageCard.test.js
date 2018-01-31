import React from 'react';
import { shallow } from 'enzyme';
import ImageCard from '../../../components/presentational/ImageCard';
import images from '../../fixtures/images';

let wrapper,
  onImageClick;

beforeEach(() => {
  const { title, subtitle, description } = images[0];
  onImageClick = jest.fn();
  wrapper = shallow(
    <ImageCard
      title={title}
      subtitle={subtitle}
      description={description}
      onImageClick={onImageClick}
    />
  );
});

it('should render non-editable ImageCard correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should handle onImageClick', () => {
  wrapper.find('div>div').at(0).prop('onClick')();
  expect(onImageClick).toHaveBeenCalled();
});
