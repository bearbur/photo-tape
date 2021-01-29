import * as React from 'react';
import Main from './main';

const photosMock = [
    {
        name: 'Rose',
        src: null,
    },
    {
        name: 'Mike',
        src: null,
    },

    {
        name: 'Olga',
        src: null,
    },

    {
        name: 'Arthur',
        src: null,
    },
];

const postsMock = [{id: 'er45', author: 'Vasya', content: 'Hello'}]

type AppProps = { userName: string };

const App: React.FunctionComponent<AppProps> = ({ userName }: AppProps) => {
    return <Main userName={userName} photos={photosMock} posts={postsMock} />;
};

export default App;
