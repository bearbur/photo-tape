import * as React from 'react';
import { useState, useEffect } from 'react';
import { MIN_PASS_LENGTH } from '../../core/constants/user-constants';

const initialPass = '';
const initialCorrect = false;

const ChangePasswordForm: React.FunctionComponent = () => {
    const [newPassword, setNewPassword] = useState(initialPass);
    const [newPassIsCorrect, setNewPassCorrect] = useState(initialCorrect);

    const handleChangePassword = (e) => {
        e.preventDefault();
        setNewPassword(e.target.value);
    };

    useEffect(() => {
        if (newPassword === initialPass || newPassword.length < MIN_PASS_LENGTH) {
            setNewPassCorrect(false);
            return;
        }

        setNewPassCorrect(true);
    }, [newPassword]);

    return (
        <div style={{display: 'none'}}>
            <p>Change user password</p>
            <div style={{display: 'flex', flexDirection: 'row'}}>
            <input
                type="password"
                onChange={handleChangePassword}
                style={{background: newPassIsCorrect ? 'lightgreen' : 'lightcoral'}}
            />
            </div>
        </div>
    );
};

export default ChangePasswordForm;
