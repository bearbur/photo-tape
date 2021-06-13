import * as React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MIN_PASS_LENGTH } from '../../core/constants/user-constants';
import { getUserSelector } from '../../core/store/selectors/user/user-selector';
import userActions from '../../core/store/reducers/user/user-actions';

const initialPass = '';
const initialCorrect = false;

const ChangePasswordForm: React.FunctionComponent = () => {
    const [newPassword, setNewPassword] = useState(initialPass);
    const [newPassIsCorrect, setNewPassCorrect] = useState(initialCorrect);

    const dispatch = useDispatch();
    const username = useSelector(getUserSelector).profile.username;
    const errorUser = useSelector(getUserSelector).error;
    const pendingUser = useSelector(getUserSelector).pending;

    const handleChangePassword = (e) => {
        e.preventDefault();
        setNewPassword(e.target.value);
    };

    const passPreconditionFailed = useMemo(() => !newPassword || newPassword === initialPass || !username, [
        newPassword,
        initialPass,
        username,
    ]);

    const handleSubmit = () => {
        if (passPreconditionFailed) {
            return;
        }

        dispatch(userActions.changePassRequest({ username, password: newPassword }));

        setNewPassword(initialPass);
    };

    useEffect(() => {
        if (newPassword === initialPass || newPassword.length < MIN_PASS_LENGTH) {
            setNewPassCorrect(false);
            return;
        }

        setNewPassCorrect(true);
    }, [newPassword]);

    return (
        <div>
            <p>Change user password</p>
            {!pendingUser && (
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <input
                        type="password"
                        onChange={handleChangePassword}
                        style={{ background: newPassword===initialPass ? 'rgba(2,34,111,0.1)' :newPassIsCorrect ? 'lightgreen' : 'lightcoral' }}
                    />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            )}
            {!!errorUser && <p style={{ color: 'red' }}>Error!</p>}
            {!!pendingUser && <p style={{ color: 'gray' }}>Please wait...</p>}
        </div>
    );
};

export default ChangePasswordForm;
