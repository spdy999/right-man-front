import React, { Component } from 'react';

interface LoginState {
  username: string;
  password: string;
  currentUser: string;
  message: string;
}
class LoginForm extends Component<null, LoginState> {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null,
      currentUser: null,
      message: null,
    };
  }
  onChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'username': {
        console.log(name);
        this.setState({ username: value });
        break;
      }
      case 'password': {
        console.log(name);
        this.setState({ password: value });
        break;
      }
    }
  };

  onSubmit = e => {
    e.preventDefault();

    const { username, password } = this.state;
    console.log('onsubmit', username, password);
    // TODO: implement signInWithEmailAndPassword()
  };

  render() {
    return (
      <section className="section container">
        <div className="columns is-centered">
          <div className="column is-half">
            <form onSubmit={this.onSubmit}>
              {/* <form> */}
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    className="input"
                    type="username"
                    name="username"
                    // value={this.state.username}
                    onChange={this.onChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    name="password"
                    onChange={this.onChange}
                  />
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-link">Submit</button>
                </div>
                <div className="control">
                  <button className="button is-text">Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default LoginForm;
