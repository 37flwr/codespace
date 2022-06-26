import {
    CHANGE_THEME,
} from './actionTypes';

export const changeTheme = (payload) => {
    return {
        type: CHANGE_THEME,
        payload
    }
}