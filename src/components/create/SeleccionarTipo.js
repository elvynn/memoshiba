import React from 'react';
import{
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';
import { navigationOptions } from '../../config/navOptions';


export default class SeleccionarTipo extends React.Component{
    constructor(props){
        super(props);
        this.state ={ }
    }

    static navigationOptions = ({ navigation }) => ({
        title: "Crear baraja",
        ...navigationOptions
       
    })
 
    render(){
        return(
            <View style={ styles.container }>
                <Text style={ styles.titular }>Vas a crear una baraja para...</Text>
                <View >
                    <TouchableHighlight 
                        style={ styles.button }
                        onPress={() => this.props.navigation.navigate('formulario', {
                           tipo: "vocabulario",
                        })}
                    >
                        <Text style={ styles.textButton }>Ampliar vocabulario</Text>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        style={ styles.button }
                        onPress={() => this.props.navigation.navigate('formulario', {
                            tipo: "vocabulario",
                        })}
                    >
                        <Text style={ styles.textButton }>Memorizar kanji</Text>
                    </TouchableHighlight>
                </View>
                
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    titular: {
        color: "#5F46A6",
        fontSize: 26,
        fontFamily: "Dosis-Semibold",
        textAlign: "center",
        marginBottom: 30
    },
    button: {
        borderRadius: 50,
        padding: 20,
        borderWidth: 2,
        borderColor: "#5F46A6",
        marginBottom: 20,
        alignItems: 'center',
    },
    textButton: {
        color: "#5F46A6",
        fontFamily: "Raleway-Medium",
        fontSize: 18,
    }
})