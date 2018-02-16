import React, { Component } from 'react';
import {  
    ScrollView,
    View,
    Text,
    StyleSheet

} from 'react-native';
import { db } from '../config/firebase';
import { navigationOptions } from '../config/navOptions';
import ListadoCartas from './ListadoCartas';



export default class Baraja extends Component{
    constructor(props){
        super(props);
        this.id = this.props.navigation.state.params.id;
        this.nombre = this.props.navigation.state.params.nombre;
        this.state = {
            cartas: []
        }
    }

    static navigationOptions = ({ navigation }) => ({
        ...navigationOptions
       
    })

      componentWillMount(){
        db.ref("/barajas/"+this.id+"/cartas")
        .once('value', snapshot => {
            this.setState({
                cartas: this.state.cartas.concat(snapshot.val()),
                loader: false
            })
        })
    }

    render(){
        return(
            <ScrollView>
                <View>
                    <Text style={styles.tituloBaraja}>{ this.nombre }</Text>
                    <ListadoCartas cartas={ this.state.cartas } />
                </View>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({ 
    tituloBaraja: {
        fontSize: 28,
        color: "#320C58",
        paddingBottom: 20,
        paddingLeft: 10,
        marginTop: 30,
        fontFamily: 'Dosis-Semibold'
    },
  
})