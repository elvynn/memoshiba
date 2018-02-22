import { StackNavigator } from 'react-navigation';

import Home from './Home';
import Baraja from './Baraja';





const AppNavigation = StackNavigator({
  Home: { screen: Home },
  baraja: { screen: Baraja }
});

export default AppNavigation;