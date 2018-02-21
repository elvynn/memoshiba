import { StackNavigator } from 'react-navigation';

import  Auth   from './Auth';
import  EmailAuth   from './EmailAuth';

const AuthNavigation = StackNavigator({
  auth: { screen: Auth },
  emailAuth: { screen: EmailAuth },
  });
  

  export default AuthNavigation;