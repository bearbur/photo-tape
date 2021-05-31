import {
    FETCH_PROFILE_FAILURE,
    FETCH_PROFILE_REQUEST,
    FETCH_PROFILE_SUCCESS,
    USER_LOGIN_EXPIRE,
    USER_LOGIN_FAILURE,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT_FAILURE,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
} from '../store/reducers/user/action-types';

/* User data interfaces and types */

type AuthToken = string;

export interface UserAuthToken {
    token: AuthToken | null;
}

export interface UserProfileInterface {
    username: string;
    id: string;
    creation_date: string;
}

/* User state interfaces */

export interface UserState {
    pending: boolean;
    authToken: UserAuthToken | null;
    user: UserProfileInterface | null;
    error: string | null;
}

/* Payload interfaces */

export interface FetchUserProfileSuccessPayload {
    data: UserProfileInterface;
    error: boolean;
    message: string;
}

export interface FetchUserProfileFailurePayload {
    error: boolean;
    message: string;
}

export interface UserLoginRequestPayload {
    username: string;
    password: string;
}

export interface UserLoginSuccessPayload {
    authToken: string;
    error: boolean;
}

export interface UserLoginFailurePayload {
    error: boolean;
    message: string;
}

export interface UserLogoutSuccessPayload {
    error: boolean;
    message: string;
}

export interface UserLogoutFailurePayload {
    error: boolean;
    message: string;
}

/* Fetch user profile interfaces */

export interface FetchUserProfileRequest {
    type: typeof FETCH_PROFILE_REQUEST;
}

export interface FetchUserProfileSuccess {
    type: typeof FETCH_PROFILE_SUCCESS;
    payload: FetchUserProfileSuccessPayload;
}

export interface FetchUserProfileFailure {
    type: typeof FETCH_PROFILE_FAILURE;
    payload: FetchUserProfileFailurePayload;
}

/* Login action interfaces*/

export interface UserLoginRequest {
    type: typeof USER_LOGIN_REQUEST;
    payload: UserLoginRequestPayload;
}

export interface UserLoginSuccess {
    type: typeof USER_LOGIN_SUCCESS;
    payload: UserLoginSuccessPayload;
}

export interface UserLoginFailure {
    type: typeof USER_LOGIN_FAILURE;
    payload: UserLoginFailurePayload;
}

/* Logout action interfaces */

export interface UserLogoutRequest {
    type: typeof USER_LOGOUT_REQUEST;
}

export interface UserLogoutSuccess {
    type: typeof USER_LOGOUT_SUCCESS;
    payload: UserLogoutSuccessPayload;
}

export interface UserLogoutFailure {
    type: typeof USER_LOGOUT_FAILURE;
    payload: UserLogoutFailurePayload;
}

/* Expire action interfaces*/

export interface UserLoginExpire {
    type: typeof USER_LOGIN_EXPIRE;
}

export type UserActions =
    | FetchUserProfileRequest
    | FetchUserProfileSuccess
    | FetchUserProfileFailure
    | UserLoginRequest
    | UserLoginSuccess
    | UserLoginFailure
    | UserLogoutRequest
    | UserLogoutSuccess
    | UserLogoutFailure
    | UserLoginExpire;
