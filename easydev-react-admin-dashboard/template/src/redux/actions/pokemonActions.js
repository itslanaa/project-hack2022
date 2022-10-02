import { createAction } from 'redux-actions';
import pokemonApi from '../../utils/api/pokemonApi';

export const fetchPokemonRequest = createAction('FETCH_POKEMON_REQUEST');
export const fetchPokemonSuccess = createAction('FETCH_POKEMON_SUCCESS');
export const fetchPokemonError = createAction('FETCH_POKEMON_ERROR');

export const fetchPokemon = count => async (dispatch) => {
  try {
    dispatch(fetchPokemonRequest());
    const { data: { results } } = await pokemonApi.getPokemons(count);

    const pokemonData = results.map(async (pokemon, index) => {
      const { data: pokemonInfo } = await pokemonApi.getPokemon(pokemon.url);
      return {
        ...results[index],
        ...pokemonInfo,
      };
    });

    const pokemons = await Promise.all(pokemonData);
    dispatch(fetchPokemonSuccess(pokemons));
  } catch (e) {
    dispatch(fetchPokemonError());
  }
};
