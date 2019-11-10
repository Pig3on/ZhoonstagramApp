import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './IconButtonStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';

const IconButton = props => {
  const resolveIconName = name => {
    if (Platform.OS === 'ios') {
      return 'ios-' + name;
    } else {
      return 'md-' + name;
    }
  };
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Icon
        name={resolveIconName(props.name)}
        size={props.size}
        color={props.color}
      />
    </TouchableOpacity>
  );
};

IconButton.defaultProps = {
  name: '',
  size: 30,
  color: 'black',
};
export default IconButton;
