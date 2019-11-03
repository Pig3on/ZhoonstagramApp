import React from 'react';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import LoginContainer from './../app/Login/LoginContainer';
import FeedContainer from './../app/Feed/FeedContainer';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import AddPhotoContainer from '../app/AddPhoto/AddPhotoContainer';
import ProfileContainer from '../app/Profile/ProfileContainer';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from 'react-navigation-stack';
import RegisterContainer from '../app/Register/RegisterContainer';

const AppStack = createBottomTabNavigator(
  {
    Feed: {
      screen: FeedContainer,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-home" size={30} color={tintColor} />
        ),
      },
    },
    AddPhoto: {
      screen: AddPhotoContainer,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-add" size={30} color={tintColor} />
        ),
      },
    },
    Profile: {
      screen: ProfileContainer,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-person" size={30} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
    },
  },
);
const AuthStack = createStackNavigator(
  {
    Register: {
      screen: RegisterContainer,
    },
    Login: {
      screen: LoginContainer,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);
const AppNav = createAnimatedSwitchNavigator(
  {
    Auth: {screen: AuthStack},
    App: {screen: AppStack},
  },
  {
    initialRouteName: 'Auth',
    headerMode: 'none',
    defaultNavigationOptions: {
      headerVisible: false,
    },
  },
);

export default createAppContainer(AppNav);
