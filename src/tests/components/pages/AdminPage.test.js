import React from 'react';
import { shallow } from 'enzyme';
import { AdminPage } from '../../../components/pages/AdminPage';
import images from '../../fixtures/images';

let wrapper,
  editImage,
  deleteImage;

beforeEach(() => {
  editImage = jest.fn();
  deleteImage = jest.fn();
  wrapper = shallow(
    <AdminPage
      images={images}
      editImage={editImage}
      deleteImage={deleteImage}
    />);
});

it('should render AdminPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should have correct number of image cards', () => {
  expect(wrapper.find('Connect(ImageCard)').length).toBe(images.length);
});

it('should have correct number of editable image cards', () => {
  expect(wrapper
    .find('Connect(ImageCard)')
    .filterWhere(imageCard => imageCard.prop('editable'))
    .length)
    .toBe(images.length);
});

it('should handle editImage', () => {
  const updates = { title: 'new title' };
  wrapper.find('Connect(ImageCard)').at(0).prop('onSaveClick')(updates);
  expect(editImage).toHaveBeenCalledWith(images[0].id, updates);
});

it('should handle editImage', () => {
  wrapper.find('Connect(ImageCard)').at(0).prop('onDeleteClick')();
  expect(deleteImage).toHaveBeenCalledWith(images[0].id);
});
