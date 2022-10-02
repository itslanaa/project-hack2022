import { handleActions } from 'redux-actions';
import {
  changeDirectionToLTR,
  changeDirectionToRTL,
} from '../actions/rtlActions';

const defaultState = {
  direction: 'ltr',
};

export default handleActions(
  {
    [changeDirectionToLTR]() {
      return { direction: 'ltr' };
    },
    [changeDirectionToRTL]() {
      return { direction: 'rtl' };
    },
  },
  defaultState,
);
