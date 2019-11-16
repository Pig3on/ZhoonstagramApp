import Snackbar from 'react-native-snackbar';
import {PRIMARY} from '../app/theme/colors';

export function handleError(message) {
  // todo logging
  Snackbar.show({
    title: message,
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor: PRIMARY,
  });
}
