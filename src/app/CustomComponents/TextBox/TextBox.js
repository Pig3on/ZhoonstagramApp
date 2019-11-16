import React from 'react';
import {TextInput} from 'react-native';
import styles from './TextBoxStyle';

const TextBox = props => {
  return (
    <TextInput
      {...props}
      placeholderTextColor={props.color}
      style={[
        styles.Textbox,
        {color: props.color, borderColor: props.color},
        props.style,
      ]}
    />
  );
};

export default TextBox;
