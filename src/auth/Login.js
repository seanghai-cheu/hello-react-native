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

export default class Login extends Component {

    static navigationOptions = {
        title: 'Login',
    };

    constructor(props) {
        super(props);
        state = {
            username: '',
            password: '',
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
                    <Text style={styles.textTitle}>Login</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Phone number or Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(username) => this.setState({username})}/>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({password})}/>
                </View>

                <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
                    <Text style={styles.buttonLink}>Forgot your password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={styles.buttonLink}>Create account</Text>
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
    inputIcon:{
        width:30,
        height:30,
        marginLeft:10,
        justifyContent: 'center'
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
    loginButton: {
        backgroundColor: "#345678",
    },
    buttonLink: {
        color: "#345678",
    },
    loginText: {
        color: 'white',
    }
});