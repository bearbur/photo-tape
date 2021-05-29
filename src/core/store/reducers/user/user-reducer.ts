import { UserActions, UserState } from '../../../interfaces/reducer-user-interfaces';
import {
    FETCH_PROFILE_FAILURE,
    FETCH_PROFILE_REQUEST,
    FETCH_PROFILE_SUCCESS, USER_LOGIN_EXPIRE, USER_LOGIN_FAILURE,
    USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS
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
            };

        case FETCH_PROFILE_SUCCESS:
            return {
                ...state,
                pending: false,
                user: action.payload.data,
                error: null,
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
            };
        }

        case USER_LOGIN_SUCCESS: {
            return {
                ...state,
                pending: false,
                authToken: {
                    token: action.payload.authToken
                }
            };
        }

        case USER_LOGIN_FAILURE: {
            return {
                ...state,
                pending: false,
                error: action.payload.message
            };
        }

        case USER_LOGIN_EXPIRE: {
            return {
                ...state,
                authToken: initialState.authToken
            }
        }

        default:
            return {
                ...state,
            };
    }
};
