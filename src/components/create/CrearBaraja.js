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
import CreateTopNav from "./CreateTopNav";

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
    })



   


    render(){
        return(
            <View style={ styles.container }>
                <CreateTopNav />
            </View>                    
                           
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f1f1",
        height: height,
        width //Lo mismo que la linea de ariba pero si se llaman igual puede ponerse asi

    }
})
