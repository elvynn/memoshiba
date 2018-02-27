import React from 'react';
import{
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    TextInput,
    Dimensions,
    Picker
} from 'react-native';
import { navigationOptions } from '../../config/navOptions';

const { width, height } = Dimensions.get('window');

export default class CrearBarajaForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
          tipo: this.props.tipo,
          titulo: null,
          nivel: "basico",
          bordeTitulo: "#E9E9E9"
        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: "",
        ...navigationOptions
       
    })

    onFocus() {
        this.setState({
            bordeTitulo: '#29DAFF'
        })
    }

      onBlur(){
        this.setState({
            bordeTitulo: '#E9E9E9'
        })
      }

      
    render(){
        return(
            <View style={ styles.container }>
                <View style={ styles.card }>
                    <TextInput 
                     style={{height: 40, 
                        borderColor: this.state.bordeTitulo, 
                        borderBottomWidth: 2,
                        fontSize: 18,
                        fontFamily: "Raleway-Regular",
                        marginLeft: 10,
                        marginRight: 10,
                        marginBottom: 30,
                        marginTop: 10 }} 
                    onChangeText={ (text) => this.setState({titulo: text }) }
                    onBlur={ () => this.onBlur("titulo") }
                    onFocus={ () => this.onFocus("titulo") }
                    placeholder={ "Nombre de la baraja..." }
                    value={ this.state.titulo }
                    />
                    <Text >{this.state.nivel}</Text>
                    <Picker
                        selectedValue={this.state.nivel}
                        onValueChange={(itemValue, itemIndex) => this.setState({nivel: itemValue})}>
                        <Picker.Item label="Básico" value="basico" />
                        <Picker.Item label="Intermedio" value="intermedio" />
                        <Picker.Item label="Avanzado" value="avanzado" />
                    </Picker>
                    <TouchableHighlight>
                        <Text>Crear baraja</Text>
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
        padding: 20,
        width 
    },
    card: {
        backgroundColor: "#fcfcfc",
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowRadius: 2,
        shadowOpacity: 0.1,
    },
})