import Header from '../header';
import { contactsMock, titleMock } from '../../mocks/mock-app';
import { DEFAULT_NAVIGATION_LINKS } from '../../core/constants/pages-contants';
import Footer from '../footer';
import * as React from 'react';

const AppWrapper: React.FunctionComponent = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Header title={titleMock} navLinks={DEFAULT_NAVIGATION_LINKS} />
            {children}
            <Footer email={contactsMock.email} />
        </div>
    );
};

export default AppWrapper;
