import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './ButtonStyle';

const Button = props => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
