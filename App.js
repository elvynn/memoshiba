import React from 'react';
import{ View } from 'react-native';
import { Font } from 'expo';

import { auth }  from './src/config/firebase';
import TabNav  from "./TabNav";




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
      'Raleway-Regular': require('./src/assets/fonts/Raleway-Regular.ttf'),
      'Dosis-Semibold': require('./src/assets/fonts/Dosis-SemiBold_0.ttf'),
    });
  }
  



  /*{
    this.state.user
    ? <AppNavigation  user={ this.state.user } />
    : <AuthNavigation />
  } */ 

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TabNav  user={ this.state.user } />
      </View>
    );
  }
}

