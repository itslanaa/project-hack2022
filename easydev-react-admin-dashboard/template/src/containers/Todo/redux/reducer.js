import { handleActions } from 'redux-actions';
import {
  fetchTodoListDataFailure,
  fetchTodoListDataRequest,
  fetchTodoListDataSuccess,
  updateTodoListData,
} from './actions';

const defaultState = {
  data: null,
  isFetching: false,
  error: null,
};

export default handleActions(
  {
    [fetchTodoListDataRequest](state) {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    },
    [fetchTodoListDataSuccess](state, { payload }) {
      return {
        ...state,
        data: payload,
        isFetching: false,
        error: null,
      };
    },
    [fetchTodoListDataFailure](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
    [updateTodoListData](state, { payload }) {
      const dataCopy = { ...state.data };
      dataCopy.elements = payload;
      return {
        ...state,
        data: dataCopy,
        isFetching: false,
        error: null,
      };
    },
  },
  defaultState,
);
