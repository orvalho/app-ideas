import _ from 'lodash';

import {FETCH_IDEAS, FETCH_IDEA, CREATE_IDEA, EDIT_IDEA, DELETE_IDEA} from '../actions/types';

export default(state = {}, action) => {
  switch (action.type) {
    case FETCH_IDEAS:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      };
    case FETCH_IDEA:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case CREATE_IDEA:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case EDIT_IDEA:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case DELETE_IDEA:
      return {
        ..._.omit(state, action.payload)
      };
    default:
      return state;
  }
};
