import {createStackNavigator} from 'react-navigation-stack';
import LoginContainer from './../app/Login/LoginContainer';
import {createAppContainer} from 'react-navigation';

const AppNav = createStackNavigator(
  {
    Home: {screen: HomeContainer},
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    defaultNavigationOptions: {
      headerVisible: false,
    },
  },
);

export default createAppContainer(AppNav);
