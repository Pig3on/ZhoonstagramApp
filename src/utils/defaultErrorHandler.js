import Snackbar from 'react-native-snackbar';
import {PRIMARY} from '../app/theme/colors';
import {navigateToAuth} from '../navigation/actions';

export function handleError(error) {
  if (error && error.message) {
    // todo logging\

    const {
      config,
      response,
      response: {status, data},
    } = error;
    if (status === 401 || data[0].code === '403') {
      navigateToAuth();
    }

    Snackbar.show({
      title: error.message,
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: PRIMARY,
    });
  }
}
