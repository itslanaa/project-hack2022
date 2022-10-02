import appConfigApi from './api/appConfigApi';
import covidApi from './api/covidApi';
import todoApi from './api/todoApi';
import pokemonApi from './api/pokemonApi';

const api = {
  appConfig: appConfigApi,
  covid: covidApi,
  todo: todoApi,
  pokemon: pokemonApi,
};

export default api;
