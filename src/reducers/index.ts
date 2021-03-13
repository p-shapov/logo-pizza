import {ACTIONS} from '../constants';
import {TActionTypes} from '../actions/types';

export default (state = {}, action: TActionTypes) => {
  switch (action.type) {
    case ACTIONS.SET_MODE: {
      return Object.assign({}, state, {
        mode: action.mode
      });
    }
    default:
      return state
  }
};