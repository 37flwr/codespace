import {
    CHANGE_THEME,
} from './actionTypes';

const initialState = {
    error: false,
    theme: 1,
}

const redactors = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_THEME:
            return {
                ...state,
                theme: action.payload,
            }
        default:
            return state
    }
}

export default redactors