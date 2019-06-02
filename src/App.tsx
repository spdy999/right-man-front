import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import ApolloClient from 'apollo-boost';
import RootContainer from './components/RootContainer';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootContainer />
        {/* <div style={{ textAlign: 'center' }}>
          <MyForm onSubmit={() => {}} />
        </div> */}
      </ApolloProvider>
    );
  }
}

export default App;
