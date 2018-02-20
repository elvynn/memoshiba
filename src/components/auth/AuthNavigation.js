import { StackNavigator } from 'react-navigation';

import  Auth   from './Auth';
import  Login   from './Login';

const AuthNavigation = StackNavigator({
  auth: { screen: Auth },
  login: { screen: Login }
  });
  

  export default AuthNavigation;