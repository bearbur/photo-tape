import * as React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import PhotoTape from '../components/photo-tape/photo-tape'
import Blog from '../components/blog/blog';

const titleMock = 'Photo tape';
const navLinksMock = [
    {
        name: 'Home',
        url: '/',
    },
];

const contactsMock = { email: 'bearbur@gmail.com' };

type MainProps = { photos: Array<{ src: string; name: string }>; userName: string; posts: Array<{ author: string, id: string, content: string }> };

const Main: React.FunctionComponent<MainProps> = ({ photos, userName, posts }: MainProps): JSX.Element => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Header title={titleMock} navLinks={navLinksMock} />
        <main>
            <div>
                <h1>{`Hello, ${userName}`}</h1>
            </div>

            <PhotoTape photos={photos} />
            <Blog posts={posts} />

        </main>
        <Footer email={contactsMock.email} />
    </div>
);

export default Main;
