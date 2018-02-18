import { StackNavigator } from 'react-navigation';

import Home from './src/components/Home';
import Baraja from './src/components/Baraja';
import Auth  from './src/components/auth/Auth';




const AppNavigation = StackNavigator({
  home: { screen: Home },
  baraja: { screen: Baraja }
});

export default AppNavigation;