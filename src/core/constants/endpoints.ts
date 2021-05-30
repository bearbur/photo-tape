const API_HOST = 'http://localhost';
const API_PORT = '80';
const API_PREFIX = 'photo_tape_api';

const combineBaseUrl = (apiUrl: string): string => `${API_HOST}:${API_PORT}/${API_PREFIX}/${apiUrl}`;

const userPrefix = (partUrl: string) => `user/${partUrl}`;

const LOGIN = 'login';
const PROFILE = 'profile';
const LOGOUT = 'logout';

const USER_LOGIN = combineBaseUrl(userPrefix(LOGIN));
const USER_LOGOUT = combineBaseUrl(userPrefix(LOGOUT));
const USER_PROFILE = combineBaseUrl(userPrefix(PROFILE));

 const endpoints : {[key: string]: string} = {
     login: USER_LOGIN,
     logout: USER_LOGOUT,
     profile: USER_PROFILE
}

export default endpoints;
