import { get } from './base/index';

export default {
  getPokemons: (count = 10) => get(`https://pokeapi.co/api/v2/pokemon?limit=${count}`),
  getPokemon: url => get(url),
};
