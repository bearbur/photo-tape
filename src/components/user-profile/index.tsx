import * as React from 'react';
import { UserProfileInterface } from '../../core/interfaces/reducer-user-interfaces';
import { Redirect } from 'react-router-dom';

type UserProfileComponentType = { profile: UserProfileInterface };

const UserProfile: React.FunctionComponent<UserProfileComponentType> = ({
    profile,
}: {
    profile: UserProfileInterface;
}) => {
    if (!profile) {
        return <Redirect to={'/login'} />;
    }

    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
            }}
        >
            <b>{`Hello, ${profile.username}!`}</b>
        </div>
    );
};

export default UserProfile;
