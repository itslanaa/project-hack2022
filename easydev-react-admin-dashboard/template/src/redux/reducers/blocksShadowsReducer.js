import { handleActions } from 'redux-actions';
import {
  changeBlocksShadowsToOnAction,
  changeBlocksShadowsToOffAction,
} from '../actions/blocksShadowsActions';

const defaultState = {
  className: 'blocks-shadows-off',
};

export default handleActions(
  {
    [changeBlocksShadowsToOnAction](state) {
      return {
        ...state,
        className: 'blocks-shadows-on',
      };
    },
    [changeBlocksShadowsToOffAction](state) {
      return {
        ...state,
        className: 'blocks-shadows-off',
      };
    },
  },
  defaultState,
);
