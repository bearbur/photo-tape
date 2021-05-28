import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Header from '../components/header';
import Footer from '../components/footer';
import { contactsMock, navLinksMock, titleMock } from '../mocks/mock-app';

const AppWrapper = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Header title={titleMock} navLinks={navLinksMock} />
            {children}
            <Footer email={contactsMock.email} />
        </div>
    );
};

const App: React.FunctionComponent = () => {
    return (
        <Router>
            <AppWrapper>
                <Routes />ы
            </AppWrapper>
        </Router>
    );
};

export default App;
