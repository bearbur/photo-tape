import * as React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import Main from '../pages/main';
import Profile from '../pages/profile';
import Login from '../pages/login';
import NotFound from '../pages/not-found';
import AppWrapper from '../components/wrappers/app-wrapper';
import { useEffect } from 'react';
import { loadState } from './utils/session-storage';

import { useDispatch } from 'react-redux';
import userActions from '../core/store/reducers/user/user-actions';

const Routes: React.FunctionComponent = () => {
    const dispatch = useDispatch();

    useEffect(
        () => {
            const authSession = loadState();

            if (!!authSession && authSession.authToken && authSession.authToken.length > 0) {
                dispatch(userActions.loginSuccess({ authToken: authSession.authToken, error: false }));
            }
        },
        /*eslint-disable*/ [] /*eslint-enable*/
    );

    return (
        <AppWrapper>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" exact component={Login} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/error" component={NotFound} />
                <Route path="*">
                    <Redirect to="/error" />
                </Route>
            </Switch>
        </AppWrapper>
    );
};

export default Routes;
