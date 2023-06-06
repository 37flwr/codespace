import { all, fork } from 'redux-saga/effects';

import themeSaga from './theme/saga';

export default function* rootSaga() {
  yield all([
    // theme
    fork(themeSaga),
  ]);
}
