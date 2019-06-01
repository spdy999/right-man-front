import React, { Component, Fragment } from 'react';
// import gql from 'graphql-tag';
// import { Query } from 'react-apollo';
// import LaunchItem from './LaunchItem';

// const LAUNCHES_QUERY = gql`
//   query LaunchesQuery {
//     users {
//       id
//       username
//     }
//   }
// `;

export class Launches extends Component {
  render() {
    return (
      <Fragment>
        <h1>Launches</h1>
      </Fragment>
    );
  }
}

export default Launches;

// import React, { Component, Fragment } from 'react';
// import gql from 'graphql-tag';
// import { Query } from 'react-apollo';
// import LaunchItem from './LaunchItem';

// const LAUNCHES_QUERY = gql`
//   query LaunchesQuery {
//     users {
//       id
//       username
//     }
//   }
// `;
// export class Launches extends Component {
//   render() {
//     return (
//       <Fragment>
//         <h1>Launches</h1>
//         <Query query={LAUNCHES_QUERY}>
//           {({ loading, error, data }) => {
//             if (loading) return <h4>Loading</h4>;
//             if (error) console.log(error);
//             console.log(data);

//             // return <h1>{data.users[0].username}</h1>;
//             return (
//               <Fragment>
//                 {data.users.map(user => (
//                   <LaunchItem key={user.id} user={user} />
//                 ))}
//               </Fragment>
//             );
//           }}
//         </Query>
//       </Fragment>
//     );
//   }
// }

// export default Launches;
