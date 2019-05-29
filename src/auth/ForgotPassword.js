import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

export default class ForgotPassword extends Component {

    constructor(props) {
        super(props);
        state = {
            username: '',
        }
    }

    onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed "+viewId);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginBottom: 10, }}>
                    <Image source={require('./../../assets/logo.jpg')} />
                </View>

                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.textTitle}>Forgot password</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Phone number or Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(username) => this.setState({username})}/>
                </View>

                <TouchableOpacity style={[styles.buttonContainer, styles.button]} onPress={() => this.onClickListener('Send')}>
                    <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#345678",
    },
    inputContainer: {
        borderRadius:4,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderTopColor: '#bcd',
        borderRightColor: '#bcd',
        borderRightColor: '#bcd',
        borderBottomColor: '#bcd',
        borderLeftColor: '#bcd',
        width:250,
        height:40,
        marginBottom:10,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:40,
        marginLeft:10,
        flex:1,
    },
    buttonContainer: {
        height:40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:15,
        width:250,
        borderRadius:4,
    },
    button: {
        backgroundColor: "#345678",
    },
    buttonText: {
        color: 'white',
    }
});