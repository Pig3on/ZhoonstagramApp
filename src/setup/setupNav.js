import {createStackNavigator} from 'react-navigation-stack';
import HomeContainer from './../app/Home/HomeContainer';
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
