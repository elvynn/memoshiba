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

import { navigationOptionsAuth } from '../../config/navOptions';
import Icon from 'react-native-vector-icons/FontAwesome';
import  auth  from '../../config/firebase';
import Expo from 'expo';
import firebase from 'firebase';

const { width, height } = Dimensions.get('window');

export default class Login extends React.Component{
    constructor(props){
        super(props);
    }


    async logInFB() {
      const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('1634935589887334', {
        permissions: ['public_profile'],
      });
    if (type === 'success') {
      const credential = firebase.auth().FacebookAuthProvider.credential(token);
      firebase.auth().signInWithCredential(credential).catch((error) => {
        console.log(error)
      })

      // Get the user's name using Facebook's Graph API
      const response = await fetch(  `https://graph.facebook.com/me?access_token=${token}`);
     // alert( `Hi ${(await response.json()).name}!`,
      
      
    }




      /*const { type, token } =  Expo.Facebook.logInWithReadPermissionsAsync('1634935589887334', {
          permissions: ['public_profile'],
      });
      if (type === 'success') {
        const credential = auth.FacebookAuthProvider.credential(token);
        auth.signInWithCredential(credential).catch((error) => {
          console.log(error)
        })
      }else{
        alert(type);
      }*/
    }

    static navigationOptions = ({ navigation }) => ({
      ...navigationOptionsAuth
    })


    

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
                      <Image source={require('../../assets/img/logo-sintext.png')} style={styles.Logo}/>
                      <Image source={require('../../assets/img/texto-logo.png')} style={styles.textoLogo}/>
                    </View>
                  <View>
                    <TouchableOpacity 
                    onPress={this.logInWithGoogle}
                    style={ [styles.btn, styles.google] }
                    >
                      <Text style={ styles.textBtn }><Icon style={ styles.iconSocial } size={20} name="google" /> Conectarse con Google</Text>
                    </TouchableOpacity>  
                    <TouchableOpacity 
                      onPress={this.logInFB}
                      style={ [styles.btn, styles.facebook] }
                    >
                      <Text style={ styles.textBtn }><Icon style={ styles.icon } size={20}  name="facebook" /> Conectarse con Facebook</Text>
                    </TouchableOpacity>  
                    <View>
                      <Text style={styles.textCorreo}>o continuar con cuenta de correo</Text>
                      <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity 
                          style={ [styles.btn, styles.correo, styles.login] }
                          onPress={() => this.props.navigation.navigate('emailAuth', { accion: true })}
                          accion={ true }
                        ><Text style={ [styles.textBtn, styles.textBtnCorreo] }>Login</Text></TouchableOpacity>  
                        <View style={ [styles.separador] }></View>
                        <TouchableOpacity 
                          style={ [styles.btn, styles.correo] }
                          onPress={() => this.props.navigation.navigate('emailAuth', { accion: false} )}
                        ><Text style={ [styles.textBtn, styles.textBtnCorreo] }>Registro</Text></TouchableOpacity>  
                      </View>
                    </View>
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
      width: 130,
      height: 130
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
      width: 150,
      borderRadius: 0
    },
    separador: {
      borderRightWidth: 1,
      borderColor: "#ffffff",
      height: 40,
      marginTop: 15
    },
    textBtn: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 16,
    },
    textCorreo: {
      color: "#ffffff",
      textAlign: "center",
      marginTop: 30,
      marginBottom: 10
    },
    iconSocial: {
      margin: 10
    },
    textBtnCorreo: {
      textAlign: "center",
    }
    
  
})