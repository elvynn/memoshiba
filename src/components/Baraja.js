import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';

import { navigationOptions } from '../config/navOptions';


export default class Baraja extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id
        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Baraja',
        ...navigationOptions
       
    })

    render(){
        return(
            <View>
                <Text>Probando</Text>
            </View>
        )
    }

}