import { login, logout, startLogout } from '../../actions/auth';

it('should generate login action object', () => {
  const uid = 'uid123';
  const name = 'name456';
  const provider = 'google.com';
  const action = login(uid, name, provider);
  expect(action).toEqual({
    type: 'LOGIN', uid, name, provider,
  });
});

it('should generate logout action object', () => {
  const action = logout();
  expect(action).toEqual({ type: 'LOGOUT' });
});

it('should go to Google logout url after logout (if logged in with Google)', () => {
  const getState = jest.fn(() => ({ auth: { provider: 'google.com' } }));
  window.location.assign = jest.fn();
  startLogout()(jest.fn(), getState);
  expect(window.location.assign).toHaveBeenLastCalledWith(expect.stringMatching(/^https:\/\/www\.google\.com\/accounts\/Logout/));
});
