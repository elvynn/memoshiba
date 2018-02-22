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

export default class CrearBaraja extends React.Component{
    constructor(props){
        super(props);
        this.state ={
          
        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: "Crear",
        tabBarIcon: ({tintColor}) => (
            <Image 
                source={ require("../../assets/icons/crear.png")} 
                style={{  tintColor: '#5F46A6'}}
            />
         ),
        showIcon: true,
        ...navigationOptions
    })



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
