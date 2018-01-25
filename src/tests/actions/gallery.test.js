import { showDetail, hideDetail } from '../../actions/gallery';

it('should create showDetail action', () => {
  const id = 'image id';
  const action = showDetail(id);
  expect(action).toEqual({
    type: 'SHOW_DETAIL',
    id,
  });
});

it('should create hideDetail action', () => {
  const action = hideDetail();
  expect(action).toEqual({
    type: 'HIDE_DETAIL',
  });
});
