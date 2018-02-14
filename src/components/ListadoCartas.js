import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    ScrollView
}  from 'react-native';

export default class ListadoCartas extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            this.props.cartas.map((carta, i) => (
                <TouchableWithoutFeedback key = { carta.id } >
                    <View style={styles.container}>
                        <View>
                            <View style={[styles.flipCard]}>
                                <View>
                                    <Text>{ carta.frontal }</Text>
                                </View>
                                <View>
                                    <Text>{ carta.trasero }</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            ))
        )
    }
}

const styles=StyleSheet.create({ })