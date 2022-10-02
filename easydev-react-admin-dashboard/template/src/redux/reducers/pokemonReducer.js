import { handleActions } from 'redux-actions';
import {
  fetchPokemonRequest,
  fetchPokemonSuccess,
  fetchPokemonError,
} from '../actions/pokemonActions';

const defaultState = {
  pokemon: [],
  isFetching: false,
  error: null,
};

export default handleActions(
  {
    [fetchPokemonRequest](state) {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    },
    [fetchPokemonSuccess](state, { payload }) {
      return {
        ...state,
        pokemon: payload,
        isFetching: false,
        error: null,
      };
    },
    [fetchPokemonError](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
  },
  defaultState,
);
