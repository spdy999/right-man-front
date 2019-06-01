import React, { Component } from 'react';
import gql from 'graphql-tag';

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
      </div>
    );
  }
}

export default Launches;
