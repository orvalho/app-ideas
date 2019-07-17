import {CHANGE_AUTH} from './types';

export default isSignedIn => async dispatch => {
  const userId = isSignedIn
    ? await window.gapi.auth2.getAuthInstance().currentUser.get().getId()
    : null;
  dispatch({
    type: CHANGE_AUTH,
    payload: {
      isSignedIn,
      userId
    }
  });
};
