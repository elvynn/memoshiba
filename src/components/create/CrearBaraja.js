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
import  auth  from '../../config/firebase';

const { width, height } = Dimensions.get('window');

export default class CrearBaraja extends React.Component{
    constructor(props){
        super(props);
        this.state ={
          
        }
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
                <Text>Hola!</Text>
            </View>                    
                           
        )
    }
}
