import {combineReducers} from 'redux';
import authReducer from './authReducer';
import {GlobalReducer} from './calenderReducer';
import carReducer from'./carReducer';


export default combineReducers({
  auth: authReducer,
  calender:GlobalReducer,
  car:carReducer,

});
