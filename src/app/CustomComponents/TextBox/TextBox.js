import React from 'react';
import {TextInput} from 'react-native';
import styles from './TextBoxStyle';


const TextBox = props => {
  return <TextInput style={styles.Textbox} {...props} />;
};

export default TextBox;
