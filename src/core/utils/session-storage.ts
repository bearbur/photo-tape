export const loadState = (): { authToken: string } | undefined => {
    try {
        const serializedState = sessionStorage.getItem('auth_info');

        if (serializedState === null) {
            return undefined;
        }

        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
};

export const saveState = (state: { authToken: string }): void => {
    try {
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem('auth_info', serializedState);
    } catch (error) {
        // Ignore write errors.
        /*eslint-disable*/
        console.error(error);
        /*eslint-enable*/
    }
};
