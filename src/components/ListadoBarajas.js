import React, { Component } from 'react';
import { 
    View,
    ScrollView,
    Text,
    Image,
    TouchableWithoutFeedback,
    StyleSheet,
    Dimensions 
} from 'react-native';
 import { db } from '../config/firebase';
  
const { width, height } = Dimensions.get('window');

export default class ListadoBarajas extends Component{
    constructor(props){
        super(props);
        this.state = {
            barajas: [],
            loader: true
        }
    }
    

    
    componentWillMount(){
        db.ref('/barajas')
        .once('value', snapshot => {
            this.setState({
                barajas: this.state.barajas.concat(snapshot.val()),
                loader: false
            })
        })
    }

    render(){
        const { navigation } = this.props
        return(
            <ScrollView style={styles.container}> 
                 {this.state.barajas.map((baraja, i) => (
                    <TouchableWithoutFeedback >
                        <View style={ styles.card }>
                            <View>
                                <Image style={ styles.foto } source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}  />
                            </View>
                            <View style={ styles.textContainer } >
                                <Text style={ styles.dificultad }>{ baraja.dificultad }</Text>
                                <Text style={ styles.nombre }> { baraja.nombre } </Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </ScrollView>
        )
    }
}

//Estilos
const styles=StyleSheet.create({
    container: {
       
        
    },
    card: {
        backgroundColor: "#ffffff",
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowRadius: 2,
        shadowOpacity: 0.1,
        flex: 1,
        flexDirection: 'row'
       
    },
    textContainer: {
        flex: 1, 
        flexWrap: 'wrap'
    },
    nombre: {
        color: "#320C58",
        fontSize: 18
    },
    foto: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 10
    },
    dificultad: {
        color: "#29DAFF",
        fontSize: 13
    }
})