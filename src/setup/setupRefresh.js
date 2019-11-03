import axios from 'axios';
import {getSecureData} from '../services/secureStorage';
import {loginUrl} from '../services/apiUrlService';
import qs from 'qs';
import { setRefreshFunction } from '../services/axiosFactory';

async function refreshFunction() {
  try {
    const tokens = await getSecureData();
    const requestBody = {
      refreshToken: tokens.refresh_token,
      grant_type: 'refreshTokenKey',
    };
    var userAuth = 'zhoonstagram';
    var passwordAuth = 'secret';
    var basicAuth = 'Basic ' + window.btoa(userAuth + ':' + passwordAuth);

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        accept: 'application/json',
        Authorization: basicAuth,
      },
    };

    const refresh = await axios.post(
      loginUrl,
      qs.stringify(requestBody),
      config,
    );
    return refresh;
  } catch (e) {
    return null;
  }
}

setRefreshFunction(refreshFunction);
