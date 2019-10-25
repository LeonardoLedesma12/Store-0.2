import React from 'react';
import { Compose } from 'recompose';
import { withAuthorization, withEmailVerification } from '../login/session';
import Messages from '../login/message';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <p>La Home Page es accesible por cualquier usuario registrado</p>
    <Messages/>
  </div>
);
const Condition = authUser => !!authUser;

export default compose(withEmailVerification, withAuthorization(Condition))(HomePage);
