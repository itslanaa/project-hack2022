import { handleActions } from 'redux-actions';
import {
  fetchCovidDataRequest,
  fetchCovidDataSuccess,
  fetchCovidDataFailure,
} from './actions';

const defaultState = {
  data: null,
  isFetching: false,
  error: null,
};

export default handleActions(
  {
    [fetchCovidDataRequest](state) {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    },
    [fetchCovidDataSuccess](state, { payload }) {
      return {
        ...state,
        data: payload,
        isFetching: false,
        error: null,
      };
    },
    [fetchCovidDataFailure](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
  },
  defaultState,
);
