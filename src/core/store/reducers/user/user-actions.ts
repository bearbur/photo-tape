import {
    FetchUserProfileFailure,
    FetchUserProfileFailurePayload,
    FetchUserProfileRequest,
    FetchUserProfileSuccess,
    FetchUserProfileSuccessPayload, UserChangePassFailure, UserChangePassFailurePayload,
    UserChangePassRequest,
    UserChangePassRequestPayload,
    UserChangePassSuccess,
    UserChangePassSuccessPayload,
    UserLoginExpire,
    UserLoginFailure,
    UserLoginFailurePayload,
    UserLoginRequest,
    UserLoginRequestPayload,
    UserLoginSuccess,
    UserLoginSuccessPayload,
    UserLogoutFailure,
    UserLogoutFailurePayload,
    UserLogoutRequest,
    UserLogoutSuccess,
    UserLogoutSuccessPayload
} from '../../../interfaces/reducer-user-interfaces';
import {
    FETCH_PROFILE_FAILURE,
    FETCH_PROFILE_REQUEST,
    FETCH_PROFILE_SUCCESS, USER_CHANGE_PASS_FAILURE, USER_CHANGE_PASS_REQUEST, USER_CHANGE_PASS_SUCCESS,
    USER_LOGIN_EXPIRE,
    USER_LOGIN_FAILURE,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT_FAILURE,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS
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
    payload,
});

const loginSuccess = (payload: UserLoginSuccessPayload): UserLoginSuccess => ({
    type: USER_LOGIN_SUCCESS,
    payload,
});

const loginFailure = (payload: UserLoginFailurePayload): UserLoginFailure => ({
    type: USER_LOGIN_FAILURE,
    payload,
});

const logoutRequest = (): UserLogoutRequest => ({
    type: USER_LOGOUT_REQUEST,
});

const logoutSuccess = (payload: UserLogoutSuccessPayload): UserLogoutSuccess => ({
    type: USER_LOGOUT_SUCCESS,
    payload,
});

const logoutFailure = (payload: UserLogoutFailurePayload): UserLogoutFailure => ({
    type: USER_LOGOUT_FAILURE,
    payload,
});

const loginExpire = (): UserLoginExpire => ({
    type: USER_LOGIN_EXPIRE,
});

const changePassRequest = (payload: UserChangePassRequestPayload): UserChangePassRequest => ({
    type: USER_CHANGE_PASS_REQUEST,
    payload
});

    const changePassSuccess = (payload: UserChangePassSuccessPayload): UserChangePassSuccess => ({
    type: USER_CHANGE_PASS_SUCCESS,
    payload,
});

const changePassFailure = (payload: UserChangePassFailurePayload): UserChangePassFailure => ({
    type: USER_CHANGE_PASS_FAILURE,
    payload,
});



export default {
    profileRequest,
    profileSuccess,
    profileFailure,
    loginRequest,
    loginFailure,
    loginSuccess,
    loginExpire,
    logoutRequest,
    logoutSuccess,
    logoutFailure,
    changePassRequest,
    changePassSuccess,
    changePassFailure
};
