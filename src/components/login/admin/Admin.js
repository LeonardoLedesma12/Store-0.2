import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './Admin.css';
import { compose } from 'recompose';
import { withAuthorization, withEmailVerification } from '../session';
import { Userlist, UserItems } from '../user';
import * as ROLES from '../../constanse/roles';
import * as ROUTES from '../../constanse/routes';

const AdminPage = () => (
  <div>
    <h1>Administrador</h1>
    <p>la pagina de administracion solo esta disponible para usuarios con permisos de administrador</p>
    <Switch>
      <Route exact path = { ROUTES.ADMIN_DETAILS } component={ UserItem }/>
      <Route exact path = { ROUTES.ADMIN } component= { Userlist }/>
    </Switch>
  </div>
);

const audition = authUser =>
authUser && !!authUser.roles [ROLES.ADMIN];

export default compose(withEmailVerification, withAuthorization(condition));(AdminPage);
