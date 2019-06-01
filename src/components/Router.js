import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../App';
import LoginForm from './LoginForm';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/login" component={LoginForm} exact />
    </Switch>
  </BrowserRouter>
);

export default Router;
