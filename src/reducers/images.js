const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_IMAGES':
      return action.images;
    case 'ADD_IMAGE':
      return [...state, action.image];
    case 'EDIT_IMAGE':
      return state.map((i) => {
        return i.id === action.id ? { ...i, ...action.updates } : i;
      });
    case 'DELETE_IMAGE':
      return state.filter(i => i.id !== action.id);
    default:
      return state;
  }
};
