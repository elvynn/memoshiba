import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';

export default class Baraja extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: 1
        }
    }

    render(){
        return(
            <View>
                <Text>Probando</Text>
            </View>
        )
    }

}