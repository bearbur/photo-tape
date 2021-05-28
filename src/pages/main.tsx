import * as React from 'react';
import { photosMock, userMock } from '../mocks/mock-app';

const Main: React.FunctionComponent = () => (
    <main>
        <div>
            <h1>{`Hello, ${userMock.name}`}</h1>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
            {photosMock.map((photo, photoKey) => (
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
);

export default Main;
