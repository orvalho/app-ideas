import {CREATE_IDEA} from './types';
import ideas from '../apis/ideas';
import history from '../history';

export default formValues => async (dispatch, getState) => {
  const {userId} = getState().auth;
  const response = await ideas.post('/ideas', {
    ...formValues,
    userId
  });
  dispatch({type: CREATE_IDEA, payload: response.data});
  history.push('/');
};
