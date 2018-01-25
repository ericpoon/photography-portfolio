import { setImages, addImage, editImage, deleteImage } from '../../actions/images';
import images from '../fixtures/images';

it('should create setImages action', () => {
  const action = setImages(images);
  expect(action).toEqual({
    type: 'SET_IMAGES',
    images,
  });
});

it('should create addImage action', () => {
  const action = addImage(images[0]);
  expect(action).toEqual({
    type: 'ADD_IMAGE',
    image: images[0],
  });
});

it('should create editImage action', () => {
  const updates = { title: 'new updated title' };
  const { id } = images[0];
  const action = editImage(id, updates);
  expect(action).toEqual({
    type: 'EDIT_IMAGE',
    id,
    updates,
  });
});

it('should create deleteImage action', () => {
  const { id } = images[0];
  const action = deleteImage(id);
  expect(action).toEqual({
    type: 'DELETE_IMAGE',
    id,
  });
});
