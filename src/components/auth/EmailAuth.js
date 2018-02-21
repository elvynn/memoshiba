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
import { navigationOptions }  from '../../config/navOptions';
import Login  from './Login'
import SignUp  from './SignUp'
const { width, height } = Dimensions.get('window');

export default class EmailAuth extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            accion: this.props.navigation.state.params.accion
        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'memoshiba',
        ...navigationOptions
    })



    render(){
        return(
            <View style={ styles.container }>
                <ScrollView>
                    <Text style={ styles.tittle }> ACCEDE CON TU CUENTA </Text>
                    <View style={ styles.containerCard }>
                        <View style={ styles.card }>
                            {
                                this.state.accion
                                ?    <Login />
                                :    <SignUp />
                            }
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F1F1F1",
        height,
        justifyContent: 'center',
        paddingTop: 20
    },
    containerCard: {
        padding: 20,
    },  
    card: {
        
        backgroundColor: "#fcfcfc",
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowRadius: 2,
        shadowOpacity: 0.1,
    },
    tittle: {
        textAlign: "center",
        fontSize: 18,
        color: "#5F46A6",
        marginTop: 20,
        marginBottom: 10
    },
    containerCard: {
        padding: 20,
    },  
})