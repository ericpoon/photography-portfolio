import imageDetailReducer from '../../reducers/imageDetail';

it('should have correct initial state', () => {
  const state = imageDetailReducer(undefined, { type: '' });
  expect(state).toEqual({ show: false });
});

it('should handle showDetail action correctly', () => {
  const id = 'image id';
  const action = { type: 'SHOW_DETAIL', id };
  const state = imageDetailReducer(undefined, action);
  expect(state).toEqual({ show: true, id });
});

it('should handle hideDetail action correctly', () => {
  const action = { type: 'HIDE_DETAIL' };
  const state = imageDetailReducer(undefined, action);
  expect(state).toEqual({ show: false });
});
