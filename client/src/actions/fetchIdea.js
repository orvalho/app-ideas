import {FETCH_IDEA} from './types';
import ideas from '../apis/ideas';

export default id => async dispatch => {
  const response = await ideas.get(`/ideas/${id}`);
  dispatch({type: FETCH_IDEA, payload: response.data});
};
