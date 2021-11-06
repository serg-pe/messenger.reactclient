import { FC, useEffect } from 'react';
import { useHistory } from 'react-router';
import { signoutRedirectCallback } from '../../services/user-service';

const SignoutOidc: FC<{}> = () => {
    const history = useHistory();
    useEffect(() => {
        const signoutAsync = async () => {
            await signoutRedirectCallback();
        }
        signoutAsync();
    }, [history]);
    return <div>Redirecting...</div>;
}

export default SignoutOidc;