const initialState = {
  selectedId: null,
  showDetail: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_DETAIL':
      return { ...state, showDetail: true, selectedId: action.id };
    case 'HIDE_DETAIL':
      return { ...state, showDetail: false };
    default:
      return state;
  }
};
