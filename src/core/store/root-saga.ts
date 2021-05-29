import { all, fork } from 'redux-saga/effects';
import userSaga from './sagas/user/user-sagas';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* rootSaga() {
    yield all([fork(userSaga)]);
}
