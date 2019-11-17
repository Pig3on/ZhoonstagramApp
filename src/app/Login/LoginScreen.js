import React, {useState} from 'react';
import {Image, View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import pigeon from '../assets/backdrop.png';
import logo from '../assets/Zhoonstagram.png';
import {TextBox, Button} from 'custom-components';
import LoadingIndicatorModal from '../CustomComponents/LoadingIndicatorModal/LoadingIndicatorModal';
import { WHITE } from '../theme/colors';

const LoginScreen = ({onLogin, navigateToRegister, login}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onChangeEmailState = text => {
    setEmail(text);
  };
  const onChangePasswordState = text => {
    setPassword(text);
  };

  const handleSubmit = event => {
    onLogin(email, password);
  };

  return (
    <ImageBackground source={pigeon} style={styles.mainBox}>
      <LoadingIndicatorModal isLoading={login.isLoading} />
      <Image
        source={logo}
        style={{width: 400, height: 100, alignSelf: 'center'}}
      />
      <Text style={styles.title}>Login</Text>
      <View style={styles.loginForm}>
        <View style={styles.field}>
          <TextBox
            placeholderTextColor="white"
            placeholder={'Email'}
            color={WHITE}
            value={email}
            onChangeText={onChangeEmailState}
          />
        </View>
        <View style={styles.field}>
          <TextBox
            placeholderTextColor="white"
            placeholder={'Password'}
            value={password}
            color={WHITE}
            onChangeText={onChangePasswordState}
          />
        </View>
        <View style={styles.field}>
          <Button onPress={handleSubmit} color={WHITE} text={'Login'} />
        </View>
        <View style={styles.field}>
          <Button
            onPress={navigateToRegister}
            color={WHITE}
            text={'Back to register'}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
