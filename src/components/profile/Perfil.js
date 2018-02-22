import React from 'react';
import{
    View,
    Text,
    TextInput,
    TouchableHighlight,
    StyleSheet,
    Dimensions,
    ScrollView,
    Image
} from 'react-native';
import  auth  from '../../config/firebase';
import { navigationOptions } from '../../config/navOptions';

const { width, height } = Dimensions.get('window');

export default class Perfil extends React.Component{
    constructor(props){
        super(props);
        this.state ={
          
        }
    }


    static navigationOptions = ({ navigation }) => ({
        title: "Mis barajas",
        tabBarIcon: ({tintColor}) => (
            <Image 
                source={ require("../../assets/icons/mis-barajas.png")} 
                style={{  tintColor: '#5F46A6'}}
            />
         ),
        showIcon: true,
        ...navigationOptions
    })



    render(){
        return(
            <View>
                <Text>Mi perfil</Text>
            </View>                    
                           
        )
    }
}
