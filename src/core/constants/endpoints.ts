const API_HOST = 'http://localhost';
const API_PORT_DEVELOPMENT = '8080';
const API_PORT_PRODUCTION = '80';
const API_PREFIX = 'photo_tape_api';

const combineBaseUrl = (apiUrl: string): string => {
    const port = process.env.NODE_ENV.toLowerCase() === 'development' ? API_PORT_DEVELOPMENT : API_PORT_PRODUCTION;
    return `${API_HOST}:${port}/${API_PREFIX}/${apiUrl}`;
};

const userPrefix = (partUrl: string) => `user/${partUrl}`;

const LOGIN = 'login';
const PROFILE = 'profile';
const LOGOUT = 'logout';
const CHANGE_PASS = 'change/password';

const USER_LOGIN = combineBaseUrl(userPrefix(LOGIN));
const USER_LOGOUT = combineBaseUrl(userPrefix(LOGOUT));
const USER_PROFILE = combineBaseUrl(userPrefix(PROFILE));
const USER_CHANGE_PASS = combineBaseUrl(userPrefix(CHANGE_PASS));

const endpoints: { [key: string]: string } = {
    login: USER_LOGIN,
    logout: USER_LOGOUT,
    profile: USER_PROFILE,
    changePass: USER_CHANGE_PASS,
};

export default endpoints;
