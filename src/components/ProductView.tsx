import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { RouteComponentProps } from 'react-router-dom';
import { AUTH_TOKEN } from '../constant';
import Button from '@material-ui/core/Button';

const productMutation = gql`
  mutation ProductMutation($name: String!) {
    createProduct(name: $name) {
      id
      name
      user {
        id
        email
      }
    }
  }
`;
// fix this.props.history using RouteComponentProps
export class ProductView extends Component {
  state = {
    name: '',
  };

  handleChange = (e: any) => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { name } = this.state;
    return (
      <Mutation mutation={productMutation}>
        {createProduct => (
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
                name="name"
                placeholder="product name"
                value={name}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={async () => {
                  try {
                    console.log('create product');
                    const response = await createProduct({
                      variables: this.state,
                    });
                  } catch (error) {
                    console.log('error');
                    console.log(error);
                  }
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        )}
      </Mutation>
    );
  }
}

export default ProductView;
