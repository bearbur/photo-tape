import * as React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import userActions from '../../core/store/reducers/user/user-actions';
import { getUserSelector } from '../../core/store/selectors/user/user-selector';
import { NavLink } from 'react-router-dom';

type LoginStateType = { login: string; password: string; processing: boolean; error: boolean };

const LoginForm: React.FunctionComponent = () => {
    const userLoginInitialState: LoginStateType = {
        login: '',
        password: '',
        processing: false,
        error: false,
    };

    const [userLogin, setUserLogin] = useState(userLoginInitialState);

    const dispatch = useDispatch();
    const userData = useSelector(getUserSelector);

    const { token } = userData;

    const handleLogin = () => {
        const { login, password } = userLogin;
        dispatch(userActions.loginRequest({ username: login, password }));
    };

    const handleChangeLogin = (e) => {
        e.preventDefault();
        setUserLogin({ ...userLogin, login: e.target.value });
    };

    const handleChangePassword = (e) => {
        e.preventDefault();
        setUserLogin({ ...userLogin, password: e.target.value });
    };

    return (
        <div
            style={{
                width: '100%',
            }}
        >
            {token && (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    <b>You already login, pal!</b>
                    <div style={{ padding: '10px', fontSize: '1.2rem' }}>
                        <NavLink to={'/'}>On start page</NavLink>
                    </div>
                </div>
            )}
            {!token && (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    <b>Login form</b>
                    <input type={'text'} onChange={handleChangeLogin} />
                    <input type={'password'} onChange={handleChangePassword} />
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
        </div>
    );
};

export default LoginForm;
