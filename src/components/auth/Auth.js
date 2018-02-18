import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import  navigationOptions  from '../../config/navOptions';

import Login from './Login';
import SignUp from './SignUp';

const Auth = TabNavigator({
  Login: { screen: Login },
  SignUp: { screen: SignUp }
},{
  tabBarOptions: {
    backgroundColor: 'red',
    height: 80,
    padding: 25
  },
  indicatorStyle: {
    backgroundColor: '#eaeaea'
  },
  navigationOptions: {
    ...navigationOptions
  }
})

export default Auth;