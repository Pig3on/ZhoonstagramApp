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
import ImagePicker from 'react-native-image-picker';
import {View} from 'react-native';
import {navigateToAddPost} from '../navigation/actions';
import {PRIMARY} from '../app/theme/colors';
import CommentContainer from '../app/Comments/CommentContainer';

const options = {
  title: 'Create a new post',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const FeedStack = createStackNavigator({
  Feed: {
    screen: FeedContainer,
    navigationOptions: {
      header: null,
    },
  },
  Comments: {
    screen: CommentContainer,
  },
});
const AppStack = createBottomTabNavigator(
  {
    Feed: {
      screen: FeedStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-home" size={30} color={tintColor} />
        ),
        tabBarOptions: {
          activeTintColor: PRIMARY,
        },
      },
    },
    AddPhoto: {
      screen: AddPhotoContainer,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-add" size={30} color={tintColor} />
        ),
        tabBarOptions: {
          activeTintColor: PRIMARY,
        },
        tabBarOnPress: () => {
          ImagePicker.showImagePicker(options, response => {
            if (response.didCancel) {
            } else if (response.error) {
            } else {
              const source = {uri: response.uri};
              navigateToAddPost(source);
            }
          });
        },
      },
    },
    Profile: {
      screen: ProfileContainer,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-person" size={30} color={tintColor} />
        ),
        tabBarOptions: {
          activeTintColor: PRIMARY,
        },
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
const MainStack = createStackNavigator(
  {
    Register: {
      screen: AppStack,
    },
    AddPost: {
      screen: AddPhotoContainer,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
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
    App: {screen: MainStack},
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
