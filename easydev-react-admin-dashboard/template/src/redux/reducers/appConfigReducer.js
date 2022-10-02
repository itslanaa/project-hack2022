import { handleActions } from 'redux-actions';
import {
  fetchAppConfigRequest,
  fetchAppConfigSuccess,
  fetchAppConfigFailure,
} from '../actions/appConfigActions';

const defaultState = {
  data: null,
  isFetching: false,
  error: null,
};

export default handleActions(
  {
    [fetchAppConfigRequest](state) {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    },
    [fetchAppConfigSuccess](state, { payload }) {
      return {
        ...state,
        data: payload,
        isFetching: false,
        error: null,
      };
    },
    [fetchAppConfigFailure](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
  },
  defaultState,
);
