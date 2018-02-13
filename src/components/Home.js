import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import { navigationOptions } from '../config/navOptions';


import ListadoBarajas from './ListadoBarajas';

const { width, height } = Dimensions.get('window');

export default class Home extends Component{
    constructor (props){
        super(props);
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'memoshiba',
        ...navigationOptions
       
    })


    render(){
        return(
            <View style={styles.container} >
                <ListadoBarajas topNavigation={this.props.navigation} />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f1f1",
        padding: 10,
        height: height,
        width //Lo mismo que la linea de ariba pero si se llaman igual puede ponerse asi

    }
})