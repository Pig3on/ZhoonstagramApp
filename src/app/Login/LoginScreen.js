import React, {useState} from 'react';
import {Image, View, ImageBackground} from 'react-native';
import styles from './styles';
import pigeon from '../assets/pigeon.png';
import logo from '../assets/Zhoonstagram.png';
import {TextBox, Button} from 'custom-components';

const LoginScreen = ({onLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onChangeUsernameState = text => {
    setUsername(text);
  };
  const onChangePasswordState = text => {
    setPassword(text);
  };

  const handleSubmit = (event) => {
    onLogin(username, password);
  };

  return (
    <ImageBackground source={pigeon} style={styles.mainBox}>
      <Image source={logo} style={{width: 450, height: 100}} />
      <View style={styles.loginForm}>
        <View style={styles.field}>
          <TextBox
            placeholderTextColor="white"
            placeholder={'Username'}
            value={username}
            onChangeText={onChangeUsernameState}
          />
        </View>
        <View style={styles.field}>
          <TextBox
            placeholderTextColor="white"
            placeholder={'Password'}
            value={password}
            onChangeText={onChangePasswordState}
          />
        </View>
        <Button onPress={handleSubmit} text={'Login'}/>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
