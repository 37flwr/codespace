import { put, takeEvery } from 'redux-saga/effects';

import { changeThemeSuccess } from './actions';
import { CHANGE_THEME } from './actionTypes';

function* changeThemeSaga({ payload }) {
  try {
    yield put(changeThemeSuccess(payload));
  } catch (error) {
    console.log(error);
  }
}

function* themeSaga() {
  yield takeEvery(CHANGE_THEME, changeThemeSaga);
}

export default themeSaga;
