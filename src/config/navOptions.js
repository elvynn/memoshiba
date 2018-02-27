import React from 'react';
import{
    
    Image,
   
} from 'react-native';
export const navigationOptions = {
   // title: <Image source={require("../assets/img/logo-header.png")} />,
    headerStyle: {
        backgroundColor: '#5F46A6',
        paddingTop: 25,
        paddingHorizontal: 0,
        height: 60,
    },
    headerTitleStyle: { //Color del texto
        color: 'white'
    },
    headerTintColor: 'white' //Color de la flechita
}



export const navigationOptionsWhite = {
    headerStyle: {
        backgroundColor: '#ffffff',
        paddingTop: 25,
        paddingHorizontal: 0,
        height: 60,
       // borderBottomColor: 'transparent',
        
    },
    headerTitleStyle: { //Color del texto
        color: '#29DAFF'
    },
    headerTintColor: '#29DAFF' //Color de la flechita
}

export const navigationOptionsAuth = {
    headerStyle: {
        backgroundColor: '#5F46A6',
        paddingTop: 0,
        paddingHorizontal: 0,
        height: 0,
       // borderBottomColor: 'transparent',
        
    },
    headerTitleStyle: { //Color del texto
        color: '#29DAFF'
    },
    headerTintColor: '#fff' //Color de la flechita
}