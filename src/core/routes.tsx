import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from '../pages/main';
import NotFound from '../pages/not-found';
import Login from '../pages/login';

const Routes: React.FunctionComponent = () => (
    <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/error" component={NotFound} />
        <Route path="*">
            <Redirect to="/error" />
        </Route>
    </Switch>
);

export default Routes;
