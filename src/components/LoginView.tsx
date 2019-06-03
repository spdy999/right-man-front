import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { RouteComponentProps } from 'react-router-dom';
import { AUTH_TOKEN } from '../constant';

// interface LoginMutationVariables {
//   email: string;
//   password: string;
// }

// interface LoginMutation_login {
//   id: string;
//   email: string;
// }

// interface LoginMutation {
//   login: LoginMutation_login | null;
// }

const loginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      email
      token
    }
  }
`;
// fix this.props.history using RouteComponentProps
export class LoginView extends Component<RouteComponentProps<{}>> {
  state = {
    email: '',
    password: '',
  };

  handleChange = (e: any) => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { email, password } = this.state;
    return (
      <Mutation mutation={loginMutation}>
        {login => (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div>
              <input
                type="text"
                name="email"
                placeholder="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <button
                onClick={async () => {
                  try {
                    console.log('login');
                    const response = await login({ variables: this.state });
                    const token = response.data.login.token;
                    console.log(token);
                    localStorage.setItem(AUTH_TOKEN, token);
                    this.props.history.push('/me');
                  } catch (error) {
                    console.log('error');
                    console.log(error);
                  }
                }}
              >
                login
              </button>
            </div>
          </div>
        )}
      </Mutation>
    );
  }
}

export default LoginView;
