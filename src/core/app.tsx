import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Header from '../components/header';
import Footer from '../components/footer';
import { contactsMock, titleMock } from '../mocks/mock-app';
import { DEFAULT_NAVIGATION_LINKS } from './constants/pages-contants';

const AppWrapper = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Header title={titleMock} navLinks={DEFAULT_NAVIGATION_LINKS} />
            {children}
            <Footer email={contactsMock.email} />
        </div>
    );
};

const App: React.FunctionComponent = () => {
    return (
        <Router>
            <AppWrapper>
                <Routes />
            </AppWrapper>
        </Router>
    );
};

export default App;
