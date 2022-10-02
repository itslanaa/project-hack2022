import {
  CHANGE_CRYPTO_TABLE_DATA,
  DELETE_CRYPTO_TABLE_DATA,
  LOAD_CRYPTO_TABLE_DATA,
} from '../actions/cryptoTableActions';

const initialState = {
  items: [
    {
      id: 0,
      name: 'Bitcoin',
      market_cap: '$ 131 131 454 444',
      price: '$ 6 432,23',
      volume: '$ 6 432 323 455',
      supply: '$ 6 432 323',
      change: '0,59%',
      chart: 'btc',
    },
    {
      id: 1,
      name: 'Ethereum',
      market_cap: '$ 131 131 454 444',
      price: '$ 6 432,23',
      volume: '$ 6 432 323 455',
      supply: '$ 6 432 323',
      change: '0,59%',
      chart: 'eth',
    },
    {
      id: 2,
      name: 'Ripple',
      market_cap: '$ 131 131 454 444',
      price: '$ 6 432,23',
      volume: '$ 6 432 323 455',
      supply: '$ 6 432 323',
      change: '0,59%',
      chart: 'xrp',
    },
    {
      id: 3,
      name: 'Bitcoin Cash',
      market_cap: '$ 131 131 454 444',
      price: '$ 6 432,23',
      volume: '$ 6 432 323 455',
      supply: '$ 6 432 323',
      change: '0,59%',
      chart: 'bch',
    },
    {
      id: 4,
      name: 'Eos',
      market_cap: '$ 131 131 454 444',
      price: '$ 6 432,23',
      volume: '$ 6 432 323 455',
      supply: '$ 6 432 323',
      change: '0,59%',
      chart: 'eos',
    },
    {
      id: 5,
      name: 'Litecoin',
      market_cap: '$ 131 131 454 444',
      price: '$ 6 432,23',
      volume: '$ 6 432 323 455',
      supply: '$ 6 432 323',
      change: '0,59%',
      chart: 'ltc',
    },
    {
      id: 6,
      name: 'Cardano',
      market_cap: '$ 131 131 454 444',
      price: '$ 6 432,23',
      volume: '$ 6 432 323 455',
      supply: '$ 6 432 323',
      change: '0,59%',
      chart: 'ada',
    },
    {
      id: 7,
      name: 'Stellar',
      market_cap: '$ 131 131 454 444',
      price: '$ 6 432,23',
      volume: '$ 6 432 323 455',
      supply: '$ 6 432 323',
      change: '0,59%',
      chart: 'xlm',
    },
    {
      id: 8,
      name: 'IOTA',
      market_cap: '$ 131 131 454 444',
      price: '$ 6 432,23',
      volume: '$ 6 432 323 455',
      supply: '$ 6 432 323',
      change: '0,59%',
      chart: 'iota',
    },
    {
      id: 9,
      name: 'NEO',
      market_cap: '$ 131 131 454 444',
      price: '$ 6 432,23',
      volume: '$ 6 432 323 455',
      supply: '$ 6 432 323',
      change: '0,59%',
      chart: 'neo',
    },
  ],
  data: {},
};

const cryptoTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CRYPTO_TABLE_DATA: {
      const loadData = state.items[action.index];
      return { ...state, data: loadData };
    }
    case CHANGE_CRYPTO_TABLE_DATA: {
      const updatedItems = [...state.items];
      updatedItems[action.index] = action.data;
      return { ...state, items: updatedItems };
    }
    case DELETE_CRYPTO_TABLE_DATA:
      return { ...state, items: action.items };
    default:
      return state;
  }
};

export default cryptoTableReducer;
