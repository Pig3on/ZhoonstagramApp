import React from 'react';
import LoginScreen from './LoginScreen';
import {withNavigation} from 'react-navigation';

const LoginContainer = ({navigation}) => {
  const navigateToFeed = () => {
    navigation.navigate('App');
  };
  return <LoginScreen onLogin={navigateToFeed} />;
};

export default withNavigation(LoginContainer);
