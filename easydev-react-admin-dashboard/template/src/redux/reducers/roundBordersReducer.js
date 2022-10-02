import { handleActions } from 'redux-actions';
import {
  changeRoundBordersToOnAction,
  changeRoundBordersToOffAction,
} from '../actions/roundBordersActions';

const defaultState = {
  className: 'round-borders-off',
};

export default handleActions(
  {
    [changeRoundBordersToOnAction](state) {
      return {
        ...state,
        className: 'round-borders-on',
      };
    },
    [changeRoundBordersToOffAction](state) {
      return {
        ...state,
        className: 'round-borders-off',
      };
    },
  },
  defaultState,
);
