import React, {useState} from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import TextBox from '../CustomComponents/TextBox/TextBox';
import Button from '../CustomComponents/Button/Button';

const AddPhotoScreen = ({imageData, uploadImage}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleUploadImage = () => {
    const post = {
      title,
      description,
    };
    console.log(imageData)
    uploadImage(post, imageData);
  };

  return (
    <View style={styles.imageBox}>
      <Image style={styles.image} source={{uri: imageData}} />
      <View style={styles.formBox}>
        <TextBox
          placeholder={'Title'}
          placeholderTextColor="white"
          value={title}
          onChangeText={textTitle => setTitle(textTitle)}
        />
        <TextBox
          value={description}
          placeholderTextColor="white"
          placeholder={'Description'}
          onChangeText={textDescription => setDescription(textDescription)}
        />
        <Button onPress={handleUploadImage} text={'Submit'} />
      </View>
    </View>
  );
};

export default AddPhotoScreen;
