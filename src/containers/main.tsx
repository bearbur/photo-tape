import * as React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const titleMock = 'Photo tape';
const navLinksMock = [
    {
        name: 'Home',
        url: '/',
    },
];

const contactsMock = { email: 'bearbur@gmail.com' };

type MainProps = { photos: Array<{ src: string; name: string }>; userName: string };

const Main: React.FunctionComponent<MainProps> = ({ photos, userName }: MainProps) => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Header title={titleMock} navLinks={navLinksMock} />
        <main>
            <div>
                <h1>{`Hello, ${userName}`}</h1>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                {photos.map((photo, photoKey) => (
                    <div key={`photoKey_${photoKey}`}>
                        <div>
                            <img
                                src={photo['src'] ? photo['src'] : './static/user.svg'}
                                alt={'No data'}
                                style={{ height: '100px' }}
                            />
                        </div>
                        <div style={{ width: '100%', textAlign: 'center' }}>
                            <span>{photo['name']}</span>
                        </div>
                    </div>
                ))}
            </div>
        </main>
        <Footer email={contactsMock.email} />
    </div>
);

export default Main;
