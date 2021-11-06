import { UserManager, UserManagerSettings } from 'oidc-client';
import { setAuthHeaders } from '../auth/auth-headers';

const userManagerSettings: UserManagerSettings = {
    authority: 'https://localhost:44393/',
    client_id: 'react_client',
    redirect_uri: 'http://localhost:3000/signin-oidc',
    response_type: 'code',
    scope: 'openid profile messenger_api',
    post_logout_redirect_uri: 'http://localhost:3000/signout-oidc',
};

const userManager = new UserManager(userManagerSettings);
export async function loadUser() {
    const user  = await userManager.getUser();
    console.log("User: ", user);
    const token = user?.access_token;
    setAuthHeaders(token);
}

export const signinRedirect = () => userManager.signinRedirect();

export const signinRedirectCallback = () => userManager.signinRedirectCallback();

export const signoutRedirect = (args?: any) => {
    userManager.clearStaleState();
    userManager.removeUser();
    return userManager.signoutRedirect(args);
}

export const signoutRedirectCallback = () => {
    userManager.clearStaleState();
    userManager.removeUser();
    return userManager.signoutRedirectCallback();
}

export default userManager;