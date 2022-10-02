import {
  CHANGE_DIRECTION_TO_LTR,
  CHANGE_DIRECTION_TO_RTL,
} from '../actions/rtlActions';

const initialState = {
  direction: 'ltr',
};

const rtlReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DIRECTION_TO_LTR:
      return { direction: 'ltr' };
    case CHANGE_DIRECTION_TO_RTL:
      return { direction: 'rtl' };
    default:
      return state;
  }
};

export default rtlReducer;
