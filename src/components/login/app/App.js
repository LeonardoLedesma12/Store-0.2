import React from 'react';
import { BrowserRouter as Router, Route } from 'rect-router-dom';
import Navegation from '../navegation';
import LandingPage from '../landing';
import SignUpPage from '../signUp';
import SignInPage from '../signIn';
import PasswordForgetPage from '../passworForget';
import HomePage from '../home';
import AccountPage from '../account';
import AdminPage from '../admin';
import * as ROUTES from '../../constanse/routes';
import { withAuthentication } from '../session';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Navegation/>
      <hr/>
      <Route exact path={ ROUTES.LANDING } component={ LandingPage }/>
      <Route path={ ROUTES.SIGN_UP } component={ SignUpPage }/>
      <Route path={ ROUTES.SIGN_IN } component={ SignInPage }/>
      <Route path={ ROUTES.PASSWORD_FORGET } component={ PasswordForgetPage }/>
      <Route path={ ROUTES.HOME } component={ HomePage }/>
      <Route path={ ROUTES.ACCOUNT } component={ AccountPage }/>
      <Route path={ ROUTES.ADMIN } component={ AdminPage }/>
    </div>
  </Router>
);

export default withAuthentication(App);
