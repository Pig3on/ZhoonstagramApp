import axios from 'axios';
import {loginUrl} from '../../../services/apiUrlService';
import {storeSecureData} from '../../../services/secureStorage';
import {navigateToMain} from '../../../navigation/actions';
import Base64 from '../../../utils/base64';
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
  return dispatch => {
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
    axios
      .post(loginUrl, qs.stringify(requestBody), config)
      .then(data => {
        storeSecureData(data.data)
          .then(() => {
            dispatch(loginLoadedAction());
            navigateToMain();
          })
          .catch(e => {
            dispatch(loginErrorAction(e.message));
          });
      })
      .catch(e => {
        console.log(JSON.stringify(e.response));
        dispatch(loginErrorAction(e.message));
      });
  };
}
