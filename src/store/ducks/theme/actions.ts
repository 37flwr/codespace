import { CHANGE_THEME, CHANGE_THEME_SUCCESS } from './actionTypes';

export const changeTheme = (payload: string): { type: string; payload: string } => {
  return {
    type: CHANGE_THEME,
    payload,
  };
};

export const changeThemeSuccess = (payload: string): { type: string; payload: string } => {
  return {
    type: CHANGE_THEME_SUCCESS,
    payload,
  };
};

const actions = {
  changeTheme,
  changeThemeSuccess,
};

export default actions;
