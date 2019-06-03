import React, { Component, Fragment } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Button from '@material-ui/core/Button';
import ProductItemView from './ProductItemView';
import Product from '../interfaces/Product.interface';

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
export class ProductView extends Component<{ products: [Product] }> {
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
          <Fragment>
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
                      await createProduct({
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
              <div>
                <ProductItemView products={this.props.products} />
              </div>
            </div>
          </Fragment>
        )}
      </Mutation>
    );
  }
}

export default ProductView;
