import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    users {
      id
      username
    }
  }
`;

export class Launches extends Component {
  render() {
    return (
      <div>
        <h1>Launches</h1>
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading</h4>;
            if (error) console.log(error);
            console.log(data);
            console.log(data.users[0].username);

            return <h1>{data.users[0].username}</h1>;
          }}
        </Query>
      </div>
    );
  }
}

export default Launches;
