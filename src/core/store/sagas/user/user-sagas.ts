import axios from 'axios';
import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import {
    FetchUserProfileFailurePayload,
    FetchUserProfileSuccessPayload,
    UserLoginFailurePayload,
    UserLoginRequest,
    UserLoginRequestPayload,
    UserLoginSuccess,
    UserLoginSuccessPayload,
    UserChangePassRequest,
    UserChangePassSuccess,
    UserChangePassFailure,
    UserChangePassRequestAuthPayload,
} from '../../../interfaces/reducer-user-interfaces';
import endpoints from '../../../constants/endpoints';
import {
    USER_CHANGE_PASS_REQUEST,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT_REQUEST,
} from '../../reducers/user/action-types';
import userActions from '../../reducers/user/user-actions';
import { getUserSelector } from '../../selectors/user/user-selector';
import { saveState } from '../../../utils/session-storage';

const userLogin = ({ username, password }: UserLoginRequestPayload) =>
    axios.post<{ data: UserLoginSuccessPayload | UserLoginFailurePayload }>(endpoints.login, { username, password });

const userProfile = (authToken: string) =>
    axios.get<{ data: FetchUserProfileSuccessPayload | FetchUserProfileFailurePayload }>(endpoints.profile, {
        headers: { Authorization: `Bearer ${authToken}` },
    });

const userLogout = (authToken: string) =>
    axios.post<{ data: FetchUserProfileSuccessPayload | FetchUserProfileFailurePayload }>(endpoints.logout, null, {
        headers: { Authorization: `Bearer ${authToken}` },
    });

const userChangePassword = ({ username, password, authToken }: UserChangePassRequestAuthPayload) =>
    axios.put<{ data: UserChangePassSuccess | UserChangePassFailure }>(
        endpoints.changePass,
        { username, password },
        {
            headers: { Authorization: `Bearer ${authToken}` },
        }
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

        if (!!error && !!message) {
            yield put(userActions.loginFailure({ error, message }));

            saveState({ authToken: '' });

            return;
        }

        new Error('User login failed.');
    } catch (e) {
        yield put(userActions.loginFailure({ error: true, message: e.toString() }));

        saveState({ authToken: '' });
    }
}

/*
  Worker Saga: on USER_LOGIN_SUCCESS action
*/
function* userProfileSaga(action: UserLoginSuccess) {
    try {
        const { authToken } = action.payload;

        saveState({ authToken });

        const response = yield call(() => userProfile(authToken));

        const { data, error, message } = response.data;

        if (data) {
            yield put(userActions.profileSuccess(response.data));
            return;
        }

        if (!!error && !!message) {
            yield put(userActions.profileFailure({ error, message }));

            saveState({ authToken: '' });

            return;
        }

        new Error('User profile fetch failed.');
    } catch (e) {
        yield put(userActions.profileFailure({ error: true, message: e.toString() }));

        saveState({ authToken: '' });
    }
}

/*
  Worker Saga: on USER_LOGOUT_REQUEST action
*/
function* userLogoutSaga() {
    try {
        const userData = yield select(getUserSelector);

        const authToken = userData.token.token;

        const response = yield call(() => userLogout(authToken));

        const { error, message } = response.data;

        if (!error && !!message) {
            yield put(userActions.logoutSuccess(response.data));

            saveState({ authToken: '' });

            return;
        }

        if (!!error && !!message) {
            yield put(userActions.logoutFailure({ error, message }));

            return;
        }

        new Error('User logout failed.');
    } catch (e) {
        yield put(userActions.logoutFailure({ error: true, message: e.toString() }));
    }
}

function* userChangePassSaga(action: UserChangePassRequest) {
    try {
        const { username, password } = action.payload;
        const userData = yield select(getUserSelector);
        const authToken = userData.token.token;

        const response = yield call(() => userChangePassword({ username, password, authToken }));

        const { error, message } = response.data;

        if (!error && !!message) {
            yield put(userActions.changePassSuccess(response.data));

            return;
        }

        if (!!error && !!message) {
            yield put(userActions.changePassFailure({ error, message }));

            return;
        }

        new Error('User change password request failed.');
    } catch (e) {
        yield put(userActions.changePassFailure({ error: true, message: e.toString() }));
    }
}

/*
  Starts worker saga on latest dispatched `USER_LOGIN_REQUEST` action.
  Allows concurrent increments.
*/

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function* userSaga() {
    yield all([
        takeLatest(USER_LOGIN_REQUEST, userLoginSaga),
        takeLatest(USER_LOGIN_SUCCESS, userProfileSaga),
        takeLatest(USER_LOGOUT_REQUEST, userLogoutSaga),
        takeLatest(USER_CHANGE_PASS_REQUEST, userChangePassSaga),
    ]);
}

export default userSaga;
