import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ProductView from './ProductView';

const meQuery = gql`
  query MeQuery {
    me {
      email
    }
  }
`;

export class MeView extends Component {
  render() {
    return (
      <Query query={meQuery}>
        {({ data, loading }) => {
          if (loading) {
            return null;
          }
          if (!data) {
            return <div>data is undefined</div>;
          }
          if (!data.me) {
            return <div>receive no user</div>;
          }
          // return (<div>Hello {data.me.email}</div><div><ProductView/></div>);
          return (
            <Fragment>
              <div>Hello {data.me.email}</div>
              <ProductView />
            </Fragment>
          );
        }}
      </Query>
    );
  }
}

export default MeView;
