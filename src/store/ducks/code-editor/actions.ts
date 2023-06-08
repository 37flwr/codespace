import types from './actionTypes';

interface IAction {
  type: string;
  payload: string;
}

const changeLanguage = (payload: string): IAction => ({
  type: types.CHANGE_LANGUAGE,
  payload,
});

const changeLanguageSuccess = (payload: string): IAction => ({
  type: types.CHANGE_LANGUAGE_SUCCESS,
  payload,
});

const changeTheme = (payload: string): IAction => ({
  type: types.CHANGE_THEME,
  payload,
});

const changeThemeSuccess = (payload: string): IAction => ({
  type: types.CHANGE_THEME_SUCCESS,
  payload,
});

const apiError = (): { type: string } => ({
  type: types.API_ERROR,
});

const actions = {
  changeLanguage,
  changeLanguageSuccess,
  changeTheme,
  changeThemeSuccess,
  apiError,
};

export default actions;
