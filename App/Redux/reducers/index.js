import {combineReducers} from 'redux';
import authReducer from './authReducer';
import {GlobalReducer} from './calenderReducer';


export default combineReducers({
  auth: authReducer,
  calender:GlobalReducer,


});
