import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const styles = StyleSheet.create({
  mainBox: {
    borderTopColor: '#b0b0b0',
    borderTopWidth: 0.5,
    flex: 1,
  },
  imageBox: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: 400,
    flex: 1,
  },
  controls: {
    flexDirection: 'row',
  },
  caption: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  item: {
    marginBottom: 5,
  },
  header: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  commentsLink: {
    color: 'black',
    textDecorationLine: 'underline',
  },
});

export default styles;
