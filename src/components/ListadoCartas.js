import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    ScrollView,
    TouchableOpacity
}  from 'react-native';

import Carta  from './Carta.js';

export default class ListadoCartas extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
            { this.props.cartas.map((carta, i) => (
                <View key = { carta.id } >
                    <Carta carta={ carta } />
                </View>
            )) }
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10
    }
})