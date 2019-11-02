import * as Keychain from 'react-native-keychain';
import jwtDecode from 'jwt-decode';

const SERVER_NAME = 'KING_ICT_ETC';

// this method stores the data in secure storage in the format:
// SERVER_NAME ,username=IdToken,password: all tokens object stringified
export async function storeSecureData(tokens, saved) {
  return new Promise((resolve, reject) => {
    Keychain.resetInternetCredentials(SERVER_NAME).then(() => {
      Keychain.setInternetCredentials(
        SERVER_NAME,
        tokens.access_token,
        JSON.stringify(tokens),
      )
        .then(resolve(true))
        .catch(reject(false));
    });
  });
}

export async function getSecureData() {
  return new Promise((resolve, reject) => {
    Keychain.getInternetCredentials(SERVER_NAME)
      .then(data => {
        try {

          resolve(JSON.parse(data.password));
        } catch (e) {
          reject(null);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function clearSecureData() {
  Keychain.resetInternetCredentials(SERVER_NAME).then(() => {
    // do nothing;
  });
}

export async function getAccountUid() {
  return new Promise((resolve, reject) => {
    Keychain.getInternetCredentials(SERVER_NAME)
      .then(data => {
        try {
          const jwt = JSON.parse(data.password).access_token;
          const decodedJwt = jwtDecode(jwt);
          resolve(decodedJwt.sid);
        } catch (e) {
          reject(null);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}
