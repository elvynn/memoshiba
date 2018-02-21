import React from 'react';
import{
    View,
    Text,
    TextInput,
    TouchableHighlight,
    StyleSheet,
    Dimensions,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import  auth  from '../../config/firebase';

const { width, height } = Dimensions.get('window');

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            email: "",
            password: "",
            bordeEmail: "#E9E9E9",
            bordePass: "#E9E9E9"
        }
    }


    autenticateUser(email,password){
        auth.signInWithEmailAndPassword(email, password);
    }

    onFocus(lugar) {
        if(lugar == "email") {
            this.setState({
                bordeEmail: '#29DAFF'
            })
        }else{
            this.setState({
                bordePass: '#29DAFF'
            })
        }
    }

      onBlur(lugar) {
        if(lugar == "email") {
            this.setState({
                bordeEmail: '#E9E9E9'
            })
        }else{
            this.setState({
                bordePass: '#E9E9E9'
            })
        }
      }


    render(){
        return(
            <View>
                            <TextInput
                                style={{height: 40, 
                                    borderColor: this.state.bordeEmail, 
                                    borderBottomWidth: 2,
                                    fontSize: 18,
                                    fontFamily: "Raleway-Regular",
                                    marginLeft: 10,
                                    marginRight: 10,
                                    marginBottom: 30,
                                    marginTop: 10 }} 
                                onChangeText={ (text) => this.setState({email: text }) }
                                onBlur={ () => this.onBlur("email") }
                                onFocus={ () => this.onFocus("email") }
                                placeholder={ "Tu email..." }
                                value={ this.state.email }
                            />
                            <TextInput
                                style={{height: 40, 
                                    borderColor: this.state.bordePass, 
                                    borderBottomWidth: 2,
                                    fontSize: 18,
                                    fontFamily: "Raleway-Regular",
                                    marginLeft: 10,
                                    marginRight: 10,
                                    marginBottom: 15,
                                    }}
                                secureTextEntry={ true }
                                onChangeText={ (text) => this.setState({password: text }) }
                                onBlur={ () => this.onBlur("pass") }
                                onFocus={ () => this.onFocus("pass") }
                                placeholder={ "Tu contraseña..." }
                                value={ this.state.password }
                            />
                            <TouchableHighlight
                                style={ styles.loginBtn }
                                onPress={ () => this.autenticateUser(this.state.email, this.state.password) }
                                >
                                <View>
                                    <Text style={ styles.textBtn }>ENTRAR</Text>
                                </View>
                            </TouchableHighlight>

                                <TouchableHighlight style={ styles.crearBtn } 
                                onPress={ () =>  this.props.navigation.navigate('signup')}>
                                    <View>
                                        <Text style={ styles.textCuenta }> ¿No tienes cuenta? Crea la tuya aquí </Text>
                                    </View>
                                </TouchableHighlight>
            </View>                    
                           
        )
    }
}

const styles = StyleSheet.create({
    loginBtn: {
        backgroundColor: 'orange',
        marginVertical: 20,
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 3,
        backgroundColor: "#755fb2",
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 3,
        marginBottom: 15
    },
    textBtn: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 16,
        fontFamily: "Raleway-Medium"
    },
    textCuenta: {
        color: "#747474",
        textAlign: "center",
        fontSize: 16,
        fontFamily: "Raleway-Medium"
    },
    crearBtn: {
        marginBottom: 10,
        paddingTop: 10,
        paddingBottom: 10        
    }
})