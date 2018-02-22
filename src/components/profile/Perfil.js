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

export default class Perfil extends React.Component{
    constructor(props){
        super(props);
        this.state ={
          
        }
    }




    render(){
        return(
            <View>
                <Text>Mi perfil</Text>
            </View>                    
                           
        )
    }
}
