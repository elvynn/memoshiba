import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
}  from 'react-native';


export default class Carta extends Component{
    constructor(props){
        super(props);
        this.state = {
           verTexto: false,
           frontal: this.props.carta.frontal,
           trasero: this.props.carta.trasero,
           actual: this.props.carta.frontal
        };
    }

    toggleText = () => {
        if(this.state.verTexto === true){
            this.setState({ verTexto: false, actual: this.state.frontal });
        }else{
            this.setState({ verTexto: true, actual: this.state.trasero });
        }
    }

    render(){
        return(
            <TouchableOpacity onPress={ this.toggleText }>
                <View style={styles.flashCard}>
                    <Text style={styles.flashCardFrontText}>{ this.state.actual }</Text>
                </View>
           </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    flashCard: {
        backgroundColor: "#ffffff",
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        height: 200,
        shadowColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowRadius: 2,
        shadowOpacity: 0.1,
        flex: 1,
        flexDirection: 'row'
    },
    flashCardFrontText: {
        fontSize: 40,
        color: "#5F46A6",
    }
})