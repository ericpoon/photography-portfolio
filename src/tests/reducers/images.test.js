import imagesReducer from '../../reducers/images';
import images from '../fixtures/images';

const initialState = [];

it('should have correct initial state', () => {
  const state = imagesReducer(undefined, { type: '' });
  expect(state).toEqual(initialState);
});

it('should set images correctly', () => {
  const action = { type: 'SET_IMAGES', images };
  const state = imagesReducer(undefined, action);
  expect(state).toEqual(images);
});

it('should add an image correctly', () => {
  const action = { type: 'ADD_IMAGE', image: images[0] };
  const state = imagesReducer(undefined, action);
  expect(state).toEqual([images[0]]);
});

it('should edit an image correctly', () => {
  const updates = {
    title: 'testing title',
    subtitle: 'testing subtitle',
  };
  const action = { type: 'EDIT_IMAGE', id: images[0].id, updates };
  const state = imagesReducer(images, action);
  expect(state[0]).toEqual({ ...images[0], ...updates });
});

it('should delete an image correctly', () => {
  const action = { type: 'DELETE_IMAGE', id: images[1].id };
  const state = imagesReducer([images[0], images[1], images[2]], action);
  expect(state).toEqual([images[0], images[2]]);
});
