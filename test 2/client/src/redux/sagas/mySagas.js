import { all, fork } from 'redux-saga/effects';
import detailInfoWatcher from './detailSaga';
import servicesWatcher from './servicesSaga';

export default function* mySagas() {
  yield all([
    fork(detailInfoWatcher),
    fork(servicesWatcher),
  ]);
}
