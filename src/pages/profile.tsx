import * as React from 'react';
import UserProfile from '../components/user-profile';
import { useSelector } from 'react-redux';
import { getUserSelector } from '../core/store/selectors/user/user-selector';

const Profile: React.FunctionComponent = () => {
    const userData = useSelector(getUserSelector);
    const { profile } = userData;

    return (
        <main>
            <UserProfile profile={profile} />
        </main>
    );
};

export default Profile;
