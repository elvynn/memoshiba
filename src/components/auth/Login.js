import React from 'react';
import{
    View,
    Text,
    TextInput,
    Image,
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
            borderColor: "#f1f1f1"
        }
    }

    static navigationOptions = ({ navigation }) => ({
       
    })

    autenticateUser(email,password){
        auth.signInWithEmailAndPassword(email, password);
    }

    onFocus() {
        this.setState({
            backgroundColor: '#29DAFF'
        })
    }

      onBlur() {
        this.setState({
            backgroundColor: '#f1f1f1'
        })
      }


    render(){
        return(
            <View style={ styles.container }>
                <View style={ styles.topArea }>
                    <Image source={require('../../assets/img/bg-gradient.png')} style={styles.backgroundImage} />
                </View>
                <View style={styles.containerContent}>
                    <View style={ styles.logoContainer }>
                        <Image source={require('../../assets/img/logo-sintext.png')} style={styles.logoImage} />
                    </View>
                    <ScrollView>
                    <Text style={ styles.tittle }> ACCEDE CON TU CUENTA </Text>
                        <View style={ styles.containerCard }>
                            <View style={ styles.card }>
                            
                                <TextInput
                                style={ styles.input }
                                onChangeText={ (text) => this.setState({email: text }) }
                                placeholder={ "Tu email..." }
                                value={ this.state.email }
                                />
                                <TextInput
                                style={ styles.input }
                                secureTextEntry={ true }
                                onChangeText={ (text) => this.setState({password: text }) }
                                onBlur={ () => this.onBlur() }
                                onFocus={ () => this.onFocus() }
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

                                <TouchableHighlight style={ styles.crearBtn } onPress={ () =>  this.props.navigation.navigate('SignUp')}>
                                    <View>
                                        <Text style={ styles.textCuenta }> ¿No tienes cuenta? Crea la tuya aquí </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F1F1F1",
        height,
    },
    topArea: {
     
        height: 200,
    },
   
    tittle: {
        textAlign: "center",
        fontSize: 18,
        color: "#5F46A6",
        marginTop: 20,
        marginBottom: 10
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: 100,
        resizeMode: 'cover', // or 'stretch'
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },  
    containerCard: {
        padding: 10,
        
    },  
    logo: {
        width: 200,
        height: 100,
    },
    logoImage: {
        marginTop: -85,
        width: 130,
        height: 130
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
    input: {
        height: 40, 
        borderColor: '#f1f1f1', 
        borderBottomWidth: 2,
        fontSize: 18,
        marginBottom: 15
    },
    textBtn: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 16,
    },
    textCuenta: {
        color: "#747474",
        textAlign: "center",
    },
    crearBtn: {
        marginBottom: 10,
        paddingTop: 10,
        paddingBottom: 10        
    }
})