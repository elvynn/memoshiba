import React from 'react';
import{ View } from 'react-native';
import { Font } from 'expo';

import AppNavigation from './AppNavigation';
import { auth }  from './src/config/firebase';
import Auth  from './src/components/auth/Auth';
import  AuthNavigation  from './src/components/auth/AuthNavigation';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user:  null
    }
  }

  componentWillMount(){
    auth.onAuthStateChanged(user => this.setState({ user }))
  }

  componentDidMount() {
    Font.loadAsync({
      'Raleway-Medium': require('./src/assets/fonts/Raleway-Medium.ttf'),
      'Dosis-Semibold': require('./src/assets/fonts/Dosis-SemiBold_0.ttf'),
    });
  }
  
   
 

  render() {
    return (
      <View style={{ flex: 1 }}>
      {
        this.state.user
        ? <AppNavigation  user={ this.state.user } />
        : <AuthNavigation  />
      }
          
      </View>
    );
  }
}

