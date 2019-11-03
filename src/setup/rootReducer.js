import loginReducer from '../app/Login/duck/reducer';
import registerReducer from '../app/Register/duck/reducer';
import feedReducer from '../app/Feed/duck/reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  feed: feedReducer,
});

export default rootReducer;
