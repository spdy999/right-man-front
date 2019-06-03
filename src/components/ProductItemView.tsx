import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const deleteMutation = gql`
  mutation DeleteProductMutation($id: String!) {
    deleteProduct(id: $id)
  }
`;
export default function ProductItemView({ products }) {
  const useStyles = makeStyles(theme => ({
    root: {
      // width: '100%',
      width: 400,
      maxWidth: 500,
      minWidth: 300,
      backgroundColor: theme.palette.background.paper,
    },
  }));

  const classes = useStyles();
  return (
    <Mutation mutation={deleteMutation}>
      {deleteProduct => (
        <List className={classes.root}>
          {products.map(value => (
            <ListItem key={value.id} role={undefined} dense button>
              <ListItemText primary={`${value.name}`} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="Edit">
                  <Edit />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="Delete"
                  onClick={async () => {
                    console.log('delete');
                    try {
                      const response = await deleteProduct({
                        variables: { id: value.id },
                      });
                      console.log(response);
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                >
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      )}
    </Mutation>
  );
}
