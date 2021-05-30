import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
    UserLoginFailurePayload,
    UserLoginRequest,
    UserLoginRequestPayload,
    UserLoginSuccessPayload,
} from '../../../interfaces/reducer-user-interfaces';
import endpoints from '../../../constants/endpoints';
import { USER_LOGIN_REQUEST } from '../../reducers/user/action-types';
import userActions from '../../reducers/user/user-actions';

const userLogin = ({ username, password }: UserLoginRequestPayload) =>
    axios.post<{ data: UserLoginSuccessPayload | UserLoginFailurePayload }>(
        endpoints.login,
        { username, password }
    );

/*
  Worker Saga: on USER_LOGIN_REQUEST action
*/
function* userLoginSaga(action: UserLoginRequest) {
    try {
        const { username, password } = action.payload;

        const response = yield call(() => userLogin({ username, password }));

        const { authToken, error, message } = response.data;

        if (authToken) {
            yield put(userActions.loginSuccess({ authToken, error }));
            return;
        }

        if (error && message) {
            yield put(userActions.loginFailure({ error, message }));
            return;
        }

        new Error('User login failed.');
    } catch (e) {
        yield put(userActions.loginFailure({ error: true, message: e.toString() }));
    }
}

/*
  Starts worker saga on latest dispatched `USER_LOGIN_REQUEST` action.
  Allows concurrent increments.
*/

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function* userSaga() {
    yield all([takeLatest(USER_LOGIN_REQUEST, userLoginSaga)]);
}

export default userSaga;
