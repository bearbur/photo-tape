import { createSelector } from 'reselect';
import { AppState } from '../../root-reducer';

const getPending = (state: AppState) => state.user.pending;
const getError = (state: AppState) => state.user.error;
const getUser = (state: AppState) => state.user.user;
const getAuthToken = (state: AppState) => state.user.authToken;

export const getUserSelector = createSelector(
    getPending,
    getError,
    getUser,
    getAuthToken,
    (pending, error, user, token) => ({
        pending,
        error,
        profile: user,
        token,
    })
);
