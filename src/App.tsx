import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import ApolloClient from 'apollo-boost';
import BasicExample from './components/Example';
// import MyForm from './components/MyForm';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BasicExample />
        {/* <div style={{ textAlign: 'center' }}>
          <MyForm onSubmit={() => {}} />
        </div> */}
      </ApolloProvider>
    );
  }
}

export default App;
