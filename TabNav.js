import React from 'react';
import { Image } from 'react-native';
import { TabNavigator }  from "react-navigation";

import PantallaPrincipal from './src/components/PantallaPrincipal'
import CrearBaraja from './src/components/create/CrearBaraja'
import Perfil from './src/components/profile/Perfil'

const TabNav = TabNavigator({
  PantallaPrincipal: { 
    screen: PantallaPrincipal,
     

  },
  CrearBaraja: { screen: CrearBaraja },
  Perfil: { screen: Perfil },
  
})

export default TabNav;
