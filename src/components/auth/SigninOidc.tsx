import { FC, useEffect } from 'react';
import { useHistory } from 'react-router';
import {signinRedirectCallback } from'../../services/user-service';

const SigninOidc: FC<{}> = () => {
    const history = useHistory();
    useEffect(() => {
        async function signinAsync() {
            console.log("signinAsync");
            await signinRedirectCallback();
            history.push('/');
        }
        signinAsync();
    }, [history]);
    return <div>Redirecting...</div>;
}

export default SigninOidc;