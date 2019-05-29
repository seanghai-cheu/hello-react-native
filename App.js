import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import {createStackNavigator} from 'react-navigation';
// import Login from './src/auth/Login';
// import Register from './src/auth/Register';
// import ForgotPassword from './src/auth/ForgotPassword';

// const AuthNavigator = createStackNavigator({
//     Login: {screen: Login},
//     Register: {screen: Register},
// });

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Hello BB</Text>
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
});