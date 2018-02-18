import React, { Component } from 'react';
import { 
    View,
    ScrollView,
    Text,
    Image,
    TouchableWithoutFeedback,
    StyleSheet,
    Dimensions,
    ActivityIndicator
} from 'react-native';
 import { db } from '../config/firebase';
  
const { width, height } = Dimensions.get('window');

export default class ListadoBarajas extends Component{
    constructor(props){
        super(props);
        this.state = {
            barajas: [],
            isLoading: true
        }
    }
    
   
    static navigationOptions = ({ navigation }) => ({
        title: 'memoshiba',
        headerStyle: {
            backgroundColor: 'black',
            paddingTop: 25,
            paddingHorizontal: 0,
            height: 80
        },
        headerTitleStyle: { //Color del texto
            color: 'white'
        },
        headerTintColor: 'white' //Color de la flechita
    })
    
    componentWillMount(){
        db.ref('/barajas')
        .once('value', snapshot => {
            this.setState({
                barajas: this.state.barajas.concat(snapshot.val()),
                isLoading: false,
                cartas: 3
            })
        })
    }

    render(){
        const { navigation } = this.props
        return this.state.isLoading
        ? (<ActivityIndicator style={styles.loader} size={1} color="#29DAFF" />)
        : ( <ScrollView style={styles.container}> 
                 {this.state.barajas.map((baraja, i) => (
                    <TouchableWithoutFeedback 
                     key = { baraja.id }
                     onPress={() => this.props.topNavigation.navigate('baraja', {
                         id: baraja.id,
                         nombre: baraja.nombre
                     })}
                        >
                        
                        <View style={ styles.card }>
                            <View>
                                <Image style={ styles.foto } source={require('../assets/img/avatar-1.png')}  />
                            </View>
                            <View style={ styles.textContainer } >
                                <Text style={ styles.dificultad }>{ baraja.dificultad }</Text>
                                <Text style={ styles.nombre }> { baraja.nombre } </Text>
                                <Text style={ styles.cartasDisponibles }>Cartas: { this.state.cartas }</Text>
                                
                                
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
    loader: {
       marginTop: 100
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
        fontSize: 18,
        fontFamily: 'Raleway-Medium'
    },
    foto: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    dificultad: {
        color: "#29DAFF",
        fontSize: 13,
        fontFamily: 'Raleway-Medium'
    },
    cartasDisponibles: {
        color: "#ccc",
        marginTop: 10,
        fontFamily: 'Raleway-Medium'
    }
})