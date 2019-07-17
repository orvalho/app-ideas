import {EDIT_IDEA} from './types';
import ideas from '../apis/ideas';
import history from '../history';

export default(id, formValues) => async dispatch => {
  const response = await ideas.patch(`/ideas/${id}`, formValues);
  dispatch({type: EDIT_IDEA, payload: response.data});
  history.push('/');
};
