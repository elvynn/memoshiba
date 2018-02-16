import React from 'react';
import{ View } from 'react-native';

import { Auth } from './src/components/Auth';
import AppNavigation from './AppNavigation';
import { Font } from 'expo';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: {}
    }
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
          <AppNavigation  />
      </View>
    );
  }
}

