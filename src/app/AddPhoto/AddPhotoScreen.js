import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

const AddPhotoScreen = ({imageData}) => {
  return (
    <View style={styles.imageBox}>
      <Image style={styles.image} source={{uri: imageData}} />
    </View>
  );
};

export default AddPhotoScreen;
