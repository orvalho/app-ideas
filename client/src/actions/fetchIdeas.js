import {FETCH_IDEAS} from './types';
import ideas from '../apis/ideas';

export default() => async dispatch => {
  const response = await ideas.get('/ideas');
  dispatch({type: FETCH_IDEAS, payload: response.data});
};
