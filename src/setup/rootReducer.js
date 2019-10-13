import homeReducer from '../app/Home/duck/reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;
