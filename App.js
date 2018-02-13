import React from 'react';
import{ View } from 'react-native'

import { Auth } from './src/components/Auth'
import AppNavigation from './AppNavigation'


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: {}
    }
  }
 

  render() {
    return (
      <View style={{ flex: 1 }}>
          <AppNavigation  />
      </View>
    );
  }
}

