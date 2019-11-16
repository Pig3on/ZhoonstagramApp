import React, {useState} from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import TextBox from '../CustomComponents/TextBox/TextBox';
import Button from '../CustomComponents/Button/Button';
import LoadingIndicatorModal from '../CustomComponents/LoadingIndicatorModal/LoadingIndicatorModal';
import {PRIMARY} from '../theme/colors';

const AddPhotoScreen = ({imageData, uploadImage, post}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleUploadImage = () => {
    const post = {
      title,
      description,
    };
    uploadImage(post, imageData);
  };

  return (
    <View style={styles.imageBox}>
      <LoadingIndicatorModal isLoading={post.isLoading} />
      <Image style={styles.image} source={{uri: imageData}} />
      <View style={styles.formBox}>
        <TextBox
          placeholder={'Title'}
          color={PRIMARY}
          placeholderTextColor="white"
          style={{marginBottom: 20}}
          value={title}
          onChangeText={textTitle => setTitle(textTitle)}
        />
        <TextBox
          value={description}
          placeholderTextColor="white"
          color={PRIMARY}
          style={{marginBottom: 20}}
          placeholder={'Description'}
          onChangeText={textDescription => setDescription(textDescription)}
        />
        <Button
          style={{marginBottom: 20}}
          color={PRIMARY}
          onPress={handleUploadImage}
          text={'Submit'}
        />
      </View>
    </View>
  );
};

export default AddPhotoScreen;
