import React from 'react';
import { shallow } from 'enzyme';
import { AdminPage } from '../../../components/pages/AdminPage';
import images from '../../fixtures/images';

let wrapper,
  startEditImage,
  startDeleteImage;

beforeEach(() => {
  startEditImage = jest.fn();
  startDeleteImage = jest.fn();
  wrapper = shallow(
    <AdminPage
      images={images}
      startEditImage={startEditImage}
      startDeleteImage={startDeleteImage}
    />);
});

it('should render AdminPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should have correct number of image cards', () => {
  expect(wrapper.find('ImageCard').length).toBe(images.length);
});

it('should have correct number of editable image cards', () => {
  expect(wrapper
    .find('ImageCard')
    .filterWhere(imageCard => imageCard.prop('editable'))
    .length)
    .toBe(images.length);
});

it('should handle editImage', () => {
  const updates = { title: 'new title' };
  wrapper.find('ImageCard').at(0).prop('onSaveClick')(updates);
  expect(startEditImage).toHaveBeenCalledWith(images[0].id, updates);
});

it('should handle editImage', () => {
  wrapper.find('ImageCard').at(0).prop('onDeleteClick')();
  expect(startDeleteImage).toHaveBeenCalledWith(images[0].id);
});
