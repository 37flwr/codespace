import types from './actionTypes';

const initialState = {
  error: false,
  theme: 'editors-top',
};

const reducers = (state = initialState, action: { type: string; payload: string }): any => {
  switch (action.type) {
    case types.CHANGE_THEME:
      return {
        ...state,
      };
    case types.CHANGE_THEME_SUCCESS:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
