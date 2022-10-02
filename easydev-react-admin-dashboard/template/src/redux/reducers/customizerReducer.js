import { handleActions } from 'redux-actions';
import {
  toggleBoxShadow,
  toggleTopNavigation,
} from '../actions/customizerActions';

const defaultState = {
  withBoxShadow: false,
  topNavigation: false,
};

export default handleActions(
  {
    [toggleBoxShadow](state) {
      return { ...state, withBoxShadow: !state.withBoxShadow };
    },
    [toggleTopNavigation](state) {
      return { ...state, topNavigation: !state.topNavigation };
    },
  },
  defaultState,
);
