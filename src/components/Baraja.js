import React, { Component } from 'react';
import {  ScrollView } from 'react-native';
import { db } from '../config/firebase';
import { navigationOptions } from '../config/navOptions';
import ListadoCartas from './ListadoCartas';



export default class Baraja extends Component{
    constructor(props){
        super(props);

        this.id = this.props.navigation.state.params.id;
        this.state = {
            cartas: []
        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Baraja',
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
                    <ListadoCartas cartas={this.state.cartas} />
            </ScrollView>
        )
    }

}