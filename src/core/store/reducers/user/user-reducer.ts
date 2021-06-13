import { UserActions, UserState } from '../../../interfaces/reducer-user-interfaces';
import {
    FETCH_PROFILE_FAILURE,
    FETCH_PROFILE_REQUEST,
    FETCH_PROFILE_SUCCESS,
    USER_CHANGE_PASS_FAILURE,
    USER_CHANGE_PASS_REQUEST,
    USER_CHANGE_PASS_SUCCESS,
    USER_LOGIN_EXPIRE,
    USER_LOGIN_FAILURE,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT_FAILURE,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
} from './action-types';

const initialState: UserState = {
    pending: false,
    authToken: null,
    user: null,
    error: null,
};

export default (state = initialState, action: UserActions): UserState => {
    switch (action.type) {
        case FETCH_PROFILE_REQUEST:
            return {
                ...state,
                pending: true,
                error: initialState.error,
            };

        case FETCH_PROFILE_SUCCESS:
            return {
                ...state,
                pending: false,
                user: action.payload.data
            };

        case FETCH_PROFILE_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.payload.message,
            };

        case USER_LOGIN_REQUEST: {
            return {
                ...state,
                pending: true,
                error: initialState.error,
            };
        }

        case USER_LOGIN_SUCCESS: {
            return {
                ...state,
                pending: false,
                authToken: {
                    token: action.payload.authToken,
                },
            };
        }

        case USER_LOGIN_FAILURE: {
            return {
                ...state,
                pending: false,
                error: action.payload.message,
            };
        }

        case USER_LOGOUT_REQUEST: {
            return {
                ...state,
                pending: true,
                error: initialState.error,
            };
        }

        case USER_LOGOUT_SUCCESS: {
            return {
                ...state,
                pending: false,
                authToken: initialState.authToken,
                user: initialState.user,
            };
        }

        case USER_LOGOUT_FAILURE: {
            return {
                ...state,
                pending: false,
                error: action.payload.message,
            };
        }

        case USER_LOGIN_EXPIRE: {
            return {
                ...initialState,
            };
        }

        case USER_CHANGE_PASS_REQUEST: {
            return {
                ...state,
                pending: true,
                error: initialState.error,
            };
        }

        case USER_CHANGE_PASS_SUCCESS: {
            return {
                ...state,
                pending: false,
            };
        }

        case USER_CHANGE_PASS_FAILURE: {
            return {
                ...state,
                error: action.payload.message,
            };
        }

        default:
            return {
                ...state,
            };
    }
};
