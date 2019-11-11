import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const styles = StyleSheet.create({
  imageBox: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 400,
  },
});

export default styles;
