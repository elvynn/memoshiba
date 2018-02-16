import React, { Component } from 'react';
import {  
    ScrollView,
    View,
    Text,
    StyleSheet

} from 'react-native';
import { db } from '../config/firebase';
import { navigationOptionsWhite } from '../config/navOptions';
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
        ...navigationOptionsWhite
       
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
            <View>
                <View>
                    <Text style={styles.tituloBaraja}>Título de la baraja</Text>
                </View>
                <ScrollView>
                        <View>
                            
                            <ListadoCartas cartas={this.state.cartas} />
                        </View>
                </ScrollView>
            </View>
        )
    }

}

const styles = StyleSheet.create({ 
    tituloBaraja: {
        fontSize: 28,
        color: "#320C58",
        backgroundColor: "#ffffff",
        paddingBottom: 20,
        paddingLeft: 10,
        shadowOffset: {
            width: 0,
            height: 1
          },
          shadowRadius: 2,
          shadowOpacity: 0.1,
    }
})