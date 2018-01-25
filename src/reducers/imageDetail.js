export default (state = { show: false }, action) => {
  switch (action.type) {
    case 'SHOW_DETAIL':
      return { show: true, id: action.id };
    case 'HIDE_DETAIL':
      return { show: false };
    default:
      return state;
  }
};
