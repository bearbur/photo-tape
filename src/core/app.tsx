import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import AppWrapper from '../components/wrappers/app-wrapper';
import { Provider } from "react-redux";

import store from "./store";

const App: React.FunctionComponent = () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <Router>
                    <AppWrapper>
                        <Routes />
                    </AppWrapper>
                </Router>
            </Provider>
        </React.StrictMode>
    );
};

export default App;
