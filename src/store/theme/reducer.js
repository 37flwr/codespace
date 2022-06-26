import {
    CHANGE_THEME, CHANGE_THEME_SUCCESS,
} from './actionTypes';

const initialState = {
    error: false,
    theme: 'editors-top',
}

const redactors = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_THEME:
            return {
                ...state,
            }
        case CHANGE_THEME_SUCCESS:
            return {
                ...state,
                theme: action.payload,
            }
        default:
            return state
    }
}

export default redactors