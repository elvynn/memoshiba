import React from 'react';
import{
    View,
    Text,
    TextInput,
    Image,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { auth, db } from '../../config/firebase';


import { navigationOptions } from '../../config/navOptions';

export default class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            email: "",
            password: ""
        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Regístrate',
        ...navigationOptions
       
    })

    createUser(email, password){
        auth.createUserWithEmailAndPassword(email, password)
        .then(result => {
            db.ref(`/users/${result.uid}`).set({
                uid: result.uid,
                email: result.email,
            })
        })
    }

    render(){
        return(
            <View style={ styles.container }>
                <Image style={ styles.logo } source={require('../../assets/img/avatar-1.png')} />
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
                 placeholder={ "Tu contraseña..." }
                 value={ this.state.password }
                 />
                 <TouchableHighlight
                 style={ styles.loginBtn }
                 onPress={ () => this.createUser(this.state.email, this.state.password) }
                 >
                    <View>
                        <Text style={ styles.textBtn }>Crea tu cuenta nueva</Text>
                    </View>
                 </TouchableHighlight>

                 <TouchableHighlight onPress={ () =>  this.props.navigation.navigate('Login')}>
                    <View>
                        <Text style={{ textAlign: 'center' }}> ¿Tienes cuenta? accede desde aquí </Text>
                    </View>
                 </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 50,
        marginTop: 90
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 50
    },
    input: {
        padding: 10,
        fontSize: 18,
        borderColor: 'orangered'
    },
    loginBtn: {
        backgroundColor: 'orange',
        marginVertical: 20,
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 3
    },
    input: {
        padding: 10,
        fontSize: 18,
    }
})