import loginReducer from '../app/Login/duck/reducer';
import feedReducer from '../app/Feed/duck/reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  login: loginReducer,
  feed: feedReducer,
});

export default rootReducer;
