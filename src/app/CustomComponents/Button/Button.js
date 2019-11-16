import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './ButtonStyle';

const Button = props => {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.button, {borderColor: props.color}, props.style]}>
      <Text style={[styles.buttonText, {color: props.color}]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
