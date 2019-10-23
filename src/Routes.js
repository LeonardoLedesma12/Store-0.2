import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Products from './components/products/Products';
import Contact from './components/contact/Contact';
import Detail from './components/detail/Detail';
import Car from './components/car/Car';
import Login from './components/login/Login';
import Registry from './components/registry/Registry';
import Register from './components/register/Register';
import List from './components/list/List';

export const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/About' component={About}/>
    <Route exact path='/Products' component={Products}/>
    <Route exact path='/Contact' component={Contact}/>
    <Route exact path='/Detail' component={Detail} />
    <Route exact path='/Car' component={Car} />
    <Route exact path='/Login' component={Login} />
    <Route exact path='/Registry' component={Registry} />
    <Route exact path='/Register' component={Register} />
    <Route exact path='/List' component={List} />
    <Route exact path='/Login' component={Login} />
  </Switch>
);
