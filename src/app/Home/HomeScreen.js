import React from 'react';
import {Image, Text,ImageBackground} from 'react-native';
import styles from './styles';
import pigeon from '../assets/pigeon.jpg';
import logo from '../assets/Zhoonstagram.png';
const HomeScreen = () => {
  return (
    <ImageBackground source={pigeon} style={styles.mainBox}>
      <Image source={logo} style={{width:450,height:100}}/>
    </ImageBackground>
  );
};

export default HomeScreen;
