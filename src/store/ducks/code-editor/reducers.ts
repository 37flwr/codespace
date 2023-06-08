import actions from './actionTypes';

const initialState = {
  language: '',
  theme: '',
  loading: false,
};

const reducer = (state = initialState, action: { type: string; payload: any }): any => {
  switch (action.type) {
    case actions.CHANGE_LANGUAGE:
      return {
        ...state,
        loading: true,
      };
    case actions.CHANGE_LANGUAGE_SUCCESS:
      return {
        ...state,
        language: action.payload,
        loading: false,
      };
    case actions.CHANGE_THEME:
      return {
        ...state,
        loading: true,
      };
    case actions.CHANGE_THEME_SUCCESS:
      return {
        ...state,
        theme: action.payload,
        loading: false,
      };
    case actions.API_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
