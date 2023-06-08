import { all, fork } from 'redux-saga/effects';

import { themeSaga } from '../ducks/theme';
import { codeEditorSaga } from '../ducks/code-editor';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function* rootSaga() {
  yield all([
    // theme
    fork(themeSaga),
    fork(codeEditorSaga),
  ]);
}
