import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import ApolloClient from 'apollo-boost';
import Launches from './components/Launches';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Launches />
      </ApolloProvider>
    );
  }
}

export default App;
