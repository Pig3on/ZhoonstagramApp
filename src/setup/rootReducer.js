import homeReducer from '../app/Login/duck/reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;
