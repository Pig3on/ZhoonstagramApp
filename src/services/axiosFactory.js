import axios from 'axios';
import {getSecureData, storeSecureData} from './secureStorage';

let refreshSubscribers = [];
let isRefreshing = false;
let axiosInstance = null;
let refreshFunction = null;

export function getAxiosInstance() {
  if (axiosInstance == null) {
    axiosInstance = getNewAxiosInstance();
  }
  return axiosInstance;
}

export function setRefreshFunction(refreshFunctionConfig) {
  refreshFunction = refreshFunctionConfig;
}

function getNewAxiosInstance() {
  axiosInstance = axios.create({
    timeout: 5000,
  });
  return setupInterceptors();
}

function setupInterceptors() {
  axiosInstance.interceptors.request.use(
    async config => {
      const secureData = await getSecureData();
      console.log(secureData);
      if (secureData) {
        config.headers.authorization = `Bearer ${secureData.access_token}`;
      }

      return config;
    },
    error => Promise.reject(error),
  );

  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      try {
        const {
          config,
          response,
          response: {status, data},
        } = error;
        if (status === 401 || data[0].code === '403') {
          return doRefreshToken(error);
        }
        return Promise.reject(error);
      } catch (e) {
        console.log(e);
        return Promise.reject(error);
      }
    },
  );

  axiosInstance.defaults.timeout = 5000;
  return axiosInstance;
}

async function doRefreshToken(error) {
  try {
    const originalRequest = error.config;

    // setup a subscriber Promise so that the failed request can me retryed once refresh finishes
    const retryRequest = new Promise((resolve, reject) => {
      subscribeTokenRefresh(token => {
        // replace the expired token and retry
        originalRequest.headers.authorization = `Bearer ${token}`;
        // do this with a fresh axios instance without interceptors to avoid infinite refresh loop
        resolve(axios.request(originalRequest));
      });
    });

    // thread safety
    if (!isRefreshing) {
      isRefreshing = true;
      const data = await getSecureData();
      const tokens = data;
      if (tokens.refreshToken == null) {
        return Promise.reject(error);
      }
      const newTokens = await refreshFunction();
      await storeSecureData(newTokens);
      onRefreshed(newTokens);
      // get data from secured storage
    }
    return retryRequest;
  } catch (e) {
    return Promise.reject(error);
  }
}
function subscribeTokenRefresh(cb) {
  refreshSubscribers.push(cb);
}
function onRefreshed(newTokens) {
  refreshSubscribers.forEach(sub => {
    sub(newTokens.accessToken);
  });

  refreshSubscribers = [];
}
