import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>Hello</div>
        {/* <div style={{ textAlign: 'center' }}>
          <MyForm onSubmit={() => {}} />
        </div> */}
      </ApolloProvider>
    );
  }
}

export default App;
