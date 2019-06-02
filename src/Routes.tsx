import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginView from './components/LoginView';
import RegisterView from './components/RegisterView';

export class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginView} />
          <Route path="/register" component={RegisterView} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
