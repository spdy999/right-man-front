import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../App';
import LoginForm from './LoginForm';

const MyRouter = () => (
  <div className="fl w-100 pl4 pr4">
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/login" component={LoginForm} exact />
    </Switch>
  </div>
);

export default MyRouter;
