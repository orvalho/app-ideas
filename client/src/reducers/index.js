import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import ideaReducer from './ideaReducer';
import authReducer from './authReducer';

export default combineReducers({ideas: ideaReducer, form: formReducer, auth: authReducer});
