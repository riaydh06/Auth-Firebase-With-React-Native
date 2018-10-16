import React,{Component} from 'react';
import {View,Text} from 'react-native';
import firebase from 'firebase';
import {Header} from './Component/Common'
import LoginForm from './Component/LoginForm'
class App extends Component{
	componentWillMount(){
		var config = {
		    apiKey: "AIzaSyD6lqvEvkK93R0ztbuQzGlcSlE5EJkah_I",
		    authDomain: "auth-with-react-native-86f94.firebaseapp.com",
		    databaseURL: "https://auth-with-react-native-86f94.firebaseio.com",
		    projectId: "auth-with-react-native-86f94",
		    storageBucket: "auth-with-react-native-86f94.appspot.com",
		    messagingSenderId: "81357879184"
	    };
	    firebase.initializeApp(config);
	}
	render(){
		return(
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		)
	}
}

export default App;