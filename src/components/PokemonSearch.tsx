import React, { Component } from 'react';
import User from '../interfaces/User.interface';

export class PokemonSearch extends Component<User> {
  render() {
    const { name, numberOfPokemons } = this.props;
    return (
      <div>
        <p>
          User {name}{' '}
          {numberOfPokemons && <span>has {numberOfPokemons} pokemons</span>}{' '}
        </p>
      </div>
    );
  }
}
export default PokemonSearch;
