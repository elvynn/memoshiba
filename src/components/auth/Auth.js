import React from 'react';
import{
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import  auth  from '../../config/firebase';
import { navigationOptionsAuth } from '../../config/navOptions';

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
      ...navigationOptionsAuth
     
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
              <ImageBackground source={require('../../assets/img/bg-full.png')} style={styles.backgroundImage} >
                <View>
                    <View  style={ styles.logoContainer}>
                      <Image source={require('../../assets/img/texto-logo.png')} style={styles.textoLogo}/>
                      <Image source={require('../../assets/img/logo-sintext.png')} style={styles.Logo}/>
                    </View>
                  <View>
                    <TouchableOpacity style={ [styles.btn, styles.google] }>
                      <Text style={ styles.textBtn }><Icon style={ styles.iconSocial } size={20} name="google" /> Conectarse con Google</Text>
                    </TouchableOpacity>  
                    <TouchableOpacity style={ [styles.btn, styles.facebook] }>
                      <Text style={ styles.textBtn }><Icon style={ styles.icon } size={20}  name="facebook" /> Conectarse con Facebook</Text>
                    </TouchableOpacity>  
                    <TouchableOpacity 
                      style={ [styles.btn, styles.correo] }
                      onPress={() => this.props.navigation.navigate('login')}
                    >
                      <Text style={ [styles.textBtn, styles.textBtnCorreo] }>o continuar con cuenta de correo</Text>
                    </TouchableOpacity>  
                  </View>
                </View>
              </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height,
    },

    backgroundImage: {
      flex: 1,
      // remove width and height to override fixed static size
      width: null,
      height: null,
      justifyContent: 'center',
      alignItems: 'center',
    },
    Logo: {
      width: 150,
      height: 150
    },
    logoContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 30
    },
    btn: {
      marginVertical: 5,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 3,
      paddingTop: 20,
      paddingBottom: 20,
      borderRadius: 3,
      marginBottom:5
  },
    google: {
      backgroundColor: "#d34836"
    },
    facebook: {
      backgroundColor: "#3b5998"
    },
    correo: {
      backgroundColor: "transparent",
      
    },
    textBtn: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 16,
    },
    iconSocial: {
      margin: 10
    }
    
  
})