import { combineReducers } from 'redux';
import auth from './auth.reducer';
import errors from './errors.reducer';
import missions from './missions.reducer';
import comment from './comment.reducer';

const rootReducer = combineReducers({
	auth,
	errors,
	missions,
	comment
});

export default rootReducer;
