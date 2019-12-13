import {registerUrl} from '../../../services/apiUrlService';
import {navigateToLogin} from '../../../navigation/actions';
import axios from 'axios';
import {handleError} from '../../../utils/defaultErrorHandler';
export const REGISTER_LOADING = 'REGISTER_LOADING';
export const REGISTER_LOADED = 'REGISTER_LOADED';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export function registerLoadingAction() {
  return {
    type: REGISTER_LOADING,
  };
}
export function registerLoadedAction() {
  return {
    type: REGISTER_LOADED,
  };
}
export function registerErrorAction(message) {
  return {
    type: REGISTER_ERROR,
    payload: message,
  };
}
export default function registerUserAction(user) {
  return dispatch => {
    console.log(registerUrl)
    console.log(user)
    dispatch(registerLoadingAction());
    axios
      .post(registerUrl, user)
      .then(() => {
        console.log("yes");
        dispatch(registerLoadedAction());
        
        navigateToLogin();
      })
      .catch(e => {
        console.log(JSON.stringify(e));
        handleError(e.message);
        dispatch(registerErrorAction());
      });
  };
}
