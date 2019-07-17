import {DELETE_IDEA} from './types';
import ideas from '../apis/ideas';
import history from '../history';

export default id => async dispatch => {
  await ideas.delete(`/ideas/${id}`);
  dispatch({type: DELETE_IDEA, payload: id});
  history.push('/');
};
