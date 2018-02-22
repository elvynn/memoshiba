

import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Dimensions,
    Image
} from 'react-native';
import { navigationOptions } from '../config/navOptions';

import TopNav from "./TopNav";


const { width, height } = Dimensions.get('window');

export default class Home extends Component{
    constructor (props){
        super(props);
    }

    static navigationOptions = ({ navigation }) => ({
        title: "Descubrir",
        tabBarIcon: ({tintColor}) => (
            <Image 
                source={ require("../assets/icons/descubrir.png")} 
                style={{  tintColor: '#5F46A6'}}
            />
         ),
        showIcon: true,
        ...navigationOptions
    })


    render(){
        return(
            <View style={styles.container} >
                <TopNav  />
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