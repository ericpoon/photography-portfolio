import galleryReducer from '../../reducers/gallery';

const initialState = {
  showDetail: false,
  selectedId: null,
};

it('should have correct initial state', () => {
  const state = galleryReducer(undefined, { type: '' });
  expect(state).toEqual(initialState);
});

it('should handle showDetail action correctly', () => {
  const id = 'image id';
  const action = { type: 'SHOW_DETAIL', id };
  const state = galleryReducer(undefined, action);
  expect(state).toEqual({ ...initialState, showDetail: true, selectedId: id });
});

it('should handle hideDetail action correctly', () => {
  const action = { type: 'HIDE_DETAIL' };
  const state = galleryReducer(undefined, action);
  expect(state).toEqual({ ...initialState, showDetail: false });
});
