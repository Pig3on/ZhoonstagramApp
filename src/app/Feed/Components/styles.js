import {StyleSheet} from 'react-native';
import {Dimensions } from "react-native";

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,

  },
  imageBox: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 400,
    flex: 1,
  },
  controls: {
    flexDirection: 'row',
  },
  caption: {},
});

export default styles;
