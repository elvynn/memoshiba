import React from 'react';
import { Image } from 'react-native';
import { TabNavigator }  from "react-navigation";

import PantallaPrincipal from './src/components/PantallaPrincipal'
import CrearBaraja from './src/components/create/CrearBaraja'
import Perfil from './src/components/profile/Perfil'

const TabNav = TabNavigator({
  PantallaPrincipal: { screen: PantallaPrincipal,  },
  CrearBaraja: { screen: CrearBaraja },
  Perfil: { screen: Perfil },
  },
  {
   // swipeEnabled: true
   tabBarOptions: {
      activeTintColor: '#5F46A6',
      inactiveTintColor: '#8e8e8e',
      style: {
        height: 60
      },
      tabStyle: {
      paddingTop: 5,  
      paddingBottom: 5  
    },
   }
  })

export default TabNav;
