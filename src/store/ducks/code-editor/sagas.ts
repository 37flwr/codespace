import { put, takeEvery } from 'redux-saga/effects';
// import { ICodeEditor } from '../../interfaces/CodeEditor.interface';

import actions from './actions';
import types from './actionTypes';

function* changeLanguageSaga({ payload }: { type: string; payload: string }): any {
  try {
    yield put(actions.changeLanguageSuccess(payload));
  } catch {
    yield put(actions.apiError());
  }
}

function* changeThemeSaga({ payload }: { type: string; payload: string }): any {
  try {
    yield put(actions.changeLanguageSuccess(payload));
  } catch {
    yield put(actions.apiError());
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function* codeEdtiorSaga() {
  yield takeEvery(types.CHANGE_LANGUAGE, changeLanguageSaga);
  yield takeEvery(types.CHANGE_THEME, changeThemeSaga);
}

export default codeEdtiorSaga;
