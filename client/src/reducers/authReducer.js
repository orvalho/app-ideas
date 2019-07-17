import {CHANGE_AUTH} from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
