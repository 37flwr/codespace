import { put, takeEvery } from 'redux-saga/effects';

import { changeThemeSuccess } from './actions';
import types from './actionTypes';

function* changeThemeSaga({ payload }: { type: string; payload: string }): any {
  try {
    yield put(changeThemeSuccess(payload));
  } catch (error) {
    console.log(error);
  }
}

function* themeSaga(): any {
  yield takeEvery(types.CHANGE_THEME, changeThemeSaga);
}

export default themeSaga;
