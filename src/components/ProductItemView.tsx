import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import Product from '../interfaces/Product.interface';

export class ProductItemView extends Component<{ products: [Product] }> {
  render() {
    return (
      <List>
        {this.props.products.map(value => (
          <ListItem
            key={value.id}
            role={undefined}
            dense
            button
            // onClick={handleToggle(value)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                // checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText primary={`Line item ${value.name}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="Comments">
                <CommentIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
    // return (
    //   <Query query={meQuery}>
    //     {({ data, loading }) => {
    //       if (loading) {
    //         return null;
    //       }
    //       if (!data) {
    //         return <div>data is undefined</div>;
    //       }
    //       if (!data.me) {
    //         return <div>receive no user</div>;
    //       }
    //       return <div>Hello {data.me.email}</div>;
    //     }}
    //   </Query>
    // );
  }
}

export default ProductItemView;
