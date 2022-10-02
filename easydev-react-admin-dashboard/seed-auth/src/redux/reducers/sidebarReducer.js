import { handleActions } from 'redux-actions';
import {
  changeSidebarVisibility,
  changeMobileSidebarVisibility,
} from '../actions/sidebarActions';

const defaultState = {
  show: false,
  collapse: false,
};

export default handleActions(
  {
    [changeSidebarVisibility](state) {
      return { ...state, collapse: !state.collapse };
    },
    [changeMobileSidebarVisibility](state) {
      return { ...state, show: !state.show };
    },
  },
  defaultState,
);
