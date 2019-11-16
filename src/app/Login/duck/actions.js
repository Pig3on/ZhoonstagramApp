import axios from 'axios';
import {loginUrl} from '../../../services/apiUrlService';
import {storeSecureData} from '../../../services/secureStorage';
import {navigateToMain} from '../../../navigation/actions';
import Base64 from '../../../utils/base64';
import {handleError} from '../../../utils/defaultErrorHandler';
const qs = require('qs');

export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_LOADED = 'LOGIN_LOADED';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function loginLoadingAction() {
  return {
    type: LOGIN_LOADING,
  };
}
export function loginLoadedAction() {
  return {
    type: LOGIN_LOADED,
  };
}
export function loginErrorAction(message) {
  return {
    type: LOGIN_ERROR,
    payload: message,
  };
}
export default function logInUserAction(email, password) {
  return async dispatch => {
    dispatch(loginLoadingAction());

    const requestBody = {
      username: email,
      password: password,
      grant_type: 'password',
    };
    var userAuth = 'zhoonstagram';
    var passwordAuth = 'secret';
    var basicAuth = 'Basic ' + Base64.btoa(userAuth + ':' + passwordAuth);

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        accept: 'application/json',
        Authorization: basicAuth,
      },
    };
    try {
      const data = await axios.post(
        loginUrl,
        qs.stringify(requestBody),
        config,
      );
      await storeSecureData(data.data);
      dispatch(loginLoadedAction());
      navigateToMain();
    } catch (e) {
      handleError('Error logging in, please check your credentials');
      dispatch(loginErrorAction(e.message));
    }
  };
}
