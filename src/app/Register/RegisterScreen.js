import React, {useState} from 'react';
import {Image, View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import pigeon from '../assets/backdrop.png';
import logo from '../assets/Zhoonstagram.png';
import {TextBox, Button} from 'custom-components';
import LoadingIndicatorModal from '../CustomComponents/LoadingIndicatorModal/LoadingIndicatorModal';
import { WHITE } from '../theme/colors';

const RegiserScreen = ({onRegister, navigateLogin, register}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onChangeEmailState = text => {
    setEmail(text);
  };
  const onChangePasswordState = text => {
    setPassword(text);
  };

  const handleSubmit = event => {
    const user = {
      email: email,
      password: password,
    };
    onRegister(user);
  };
  return (
    <ImageBackground source={pigeon} style={styles.mainBox}>
      <LoadingIndicatorModal isLoading={register.isLoading} />
      <Image
        source={logo}
        style={{width: 400, height: 100, alignSelf: 'center'}}
      />
      <Text style={styles.title}>Register</Text>
      <View style={styles.loginForm}>
        <View style={styles.field}>
          <TextBox
            color={WHITE}
            placeholderTextColor="white"
            placeholder={'Email'}
            value={email}
            onChangeText={onChangeEmailState}
          />
        </View>
        <View style={styles.field}>
          <TextBox
            color={WHITE}
            placeholderTextColor="white"
            placeholder={'Password'}
            value={password}
            onChangeText={onChangePasswordState}
          />
        </View>
        <View style={styles.field}>
          <Button color={WHITE} onPress={handleSubmit} text={'Register'} />
        </View>
        <View style={styles.field}>
          <Button
            color={WHITE}
            onPress={navigateLogin}
            text={'Login instead'}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default RegiserScreen;
