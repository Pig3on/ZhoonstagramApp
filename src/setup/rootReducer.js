import loginReducer from '../app/Login/duck/reducer';
import registerReducer from '../app/Register/duck/reducer';
import feedReducer from '../app/Feed/duck/reducer';
import postReducer from '../app/AddPhoto/duck/reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  feed: feedReducer,
  post: postReducer,
});

export default rootReducer;
