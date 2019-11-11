import {registerUrl} from '../../../services/apiUrlService';
import {navigateToLogin} from '../../../navigation/actions';
import {getAxiosInstance} from '../../../services/axiosFactory';
import axios from 'axios';
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
    dispatch(registerLoadingAction());
    axios
      .post(registerUrl, user)
      .then(() => {
        dispatch(registerLoadedAction());
        navigateToLogin();
      })
      .catch(e => {
        dispatch(registerErrorAction());
      });
  };
}
