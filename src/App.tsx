import { FC, ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import userManager, { loadUser, signinRedirect } from './services/user-service';
import AuthProvider from './auth/auth-provider';
import SigninOidc from './components/auth/SigninOidc';
import SignoutOidc from './components/auth/SignoutOidc';

const App: FC<{}> = (): ReactElement => {
  loadUser();
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => signinRedirect()}>Sign In</button>
        <AuthProvider userManager={userManager}>
          <Router>
            <Switch>
              <Route path="/signout-oidc" component={SignoutOidc}></Route>
              <Route path="/signin-oidc" component={SigninOidc}></Route>
            </Switch>
          </Router>
        </AuthProvider>
      </header>
    </div>
  );
}

export default App;
