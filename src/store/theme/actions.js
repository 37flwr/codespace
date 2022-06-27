import {
    CHANGE_THEME,
    CHANGE_THEME_SUCCESS,
} from './actionTypes';

export const changeTheme = (payload) => {
    return {
        type: CHANGE_THEME,
        payload
    }
}

export const changeThemeSuccess = (payload) => {
    return {
        type: CHANGE_THEME_SUCCESS,
        payload
    }
}