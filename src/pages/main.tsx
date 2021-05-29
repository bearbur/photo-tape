import * as React from 'react';
import { photosMock } from '../mocks/mock-app';
import { useSelector } from 'react-redux';
import { getUserSelector } from '../core/store/selectors/user/user-selector';

const Main: React.FunctionComponent = () => {
    const user = useSelector(getUserSelector);

    const { profile } = user;

    return (
        <main>
            {profile && (
                <div>
                    <h1>{`Hello, ${profile.username}!`}</h1>
                </div>
            )}
            {!profile && <p>{`Hello, guest!`}</p>}
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
};

export default Main;
