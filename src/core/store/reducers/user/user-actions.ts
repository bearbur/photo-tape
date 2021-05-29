import {
    FetchUserProfileFailure,
    FetchUserProfileFailurePayload,
    FetchUserProfileRequest,
    FetchUserProfileSuccess,
    FetchUserProfileSuccessPayload,
    UserLoginExpire,
    UserLoginFailure,
    UserLoginFailurePayload,
    UserLoginRequest, UserLoginRequestPayload,
    UserLoginSuccess,
    UserLoginSuccessPayload
} from '../../../interfaces/reducer-user-interfaces';
import {
    FETCH_PROFILE_FAILURE,
    FETCH_PROFILE_REQUEST,
    FETCH_PROFILE_SUCCESS,
    USER_LOGIN_EXPIRE,
    USER_LOGIN_FAILURE,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
} from './action-types';

const profileRequest = (): FetchUserProfileRequest => ({
    type: FETCH_PROFILE_REQUEST,
});

const profileSuccess = (payload: FetchUserProfileSuccessPayload): FetchUserProfileSuccess => ({
    type: FETCH_PROFILE_SUCCESS,
    payload,
});

const profileFailure = (payload: FetchUserProfileFailurePayload): FetchUserProfileFailure => ({
    type: FETCH_PROFILE_FAILURE,
    payload,
});

const loginRequest = (payload: UserLoginRequestPayload): UserLoginRequest => ({
    type: USER_LOGIN_REQUEST,
    payload
});

const loginSuccess = (payload: UserLoginSuccessPayload): UserLoginSuccess => ({
    type: USER_LOGIN_SUCCESS,
    payload,
});

const loginFailure = (payload: UserLoginFailurePayload): UserLoginFailure => ({
    type: USER_LOGIN_FAILURE,
    payload,
});

const loginExpire = (): UserLoginExpire => ({
    type: USER_LOGIN_EXPIRE,
});

export default {
    profileRequest,
    profileSuccess,
    profileFailure,
    loginRequest,
    loginFailure,
    loginSuccess,
    loginExpire,
};
