import React from 'react';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import LoginContainer from './../app/Login/LoginContainer';
import FeedContainer from './../app/Feed/FeedContainer';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import AddPhotoContainer from '../app/AddPhoto/AddPhotoContainer';
import ProfileContainer from '../app/Profile/ProfileContainer';
import Icon from 'react-native-vector-icons/Ionicons';

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

const AppNav = createAnimatedSwitchNavigator(
  {
    Login: {screen: LoginContainer},
    App: {screen: AppStack},
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    defaultNavigationOptions: {
      headerVisible: false,
    },
  },
);

export default createAppContainer(AppNav);
