import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import LoginForm from './LoginForm';

export class RootContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      // <div>hello</div>
      <BrowserRouter>
        <Fragment>{this.renderRoute()}</Fragment>
      </BrowserRouter>
    );
  }

  renderRoute() {
    return (
      <div className="fl w-100 pl4 pr4">
        <div>hello1</div>
        <div>hello2</div>
      </div>
      // <Switch>
      //   <Route path="/" component={App} exact />
      //   <Route path="/login" component={LoginForm} exact />
      // </Switch>
    );
  }
}

export default RootContainer;
