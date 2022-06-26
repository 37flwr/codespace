import { put, takeEvery } from 'redux-saga/effects';

import { changeTheme } from './actions';
import { CHANGE_THEME } from './actionTypes';

function* changeThemeSaga({ payload }) {
    try {
        console.log('Success');
        yield put(changeTheme(payload));

    } catch (error) {
        console.log(error)
    }
}

function* themeSaga() {
    yield takeEvery(CHANGE_THEME, changeThemeSaga)
}

export default themeSaga