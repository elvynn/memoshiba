import { StackNavigator } from 'react-navigation';
import Home from './src/components/Home';
import Baraja from './src/components/Baraja';



const AppNavigation = StackNavigator({
  home: { screen: Home },
  baraja: { screen: Baraja }
});

export default AppNavigation;