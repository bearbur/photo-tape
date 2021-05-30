import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from '../pages/main';
import Profile from '../pages/profile';
import Login from '../pages/login';
import NotFound from '../pages/not-found';

const Routes: React.FunctionComponent = () => (
    <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/error" component={NotFound} />
        <Route path="*">
            <Redirect to="/error" />
        </Route>
    </Switch>
);

export default Routes;
