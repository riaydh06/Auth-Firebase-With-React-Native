import React,{Component} from 'react';
import {View,Text} from 'react-native';
// import firebase from 'firebase';
import {Header,Button,Spinner} from './Component/Common'
import LoginForm from './Component/LoginForm'
class App extends Component {
	state = {
			loggedIn: null
	};
	componentWillMount() {
		const firebase = require("firebase");
		var config = {
		    apiKey: "AIzaSyD6lqvEvkK93R0ztbuQzGlcSlE5EJkah_I",
		    authDomain: "auth-with-react-native-86f94.firebaseapp.com",
		    databaseURL: "https://auth-with-react-native-86f94.firebaseio.com",
		    projectId: "auth-with-react-native-86f94",
		    storageBucket: "auth-with-react-native-86f94.appspot.com",
		    messagingSenderId: "81357879184"
	    };
	    firebase.initializeApp(config);
	    firebase.auth().onAuthStateChanged((user)=>{
	    	if(user) {
	    		this.setState({loggedIn:true});
	    	} else {
	    		this.setState({loggedIn:false});
	    	}
	    });
	}
	renderContent() {
		const firebase = require("firebase");
		switch (this.state.loggedIn){
			case true:
				return (
					<Button onPress={()=>firebase.auth().signOut()}>Log Out</Button>
				);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size="large" />;
		}
	}
	render() {
		return(
			<View style={{flex: 1}}>
				<Header headerText="Authentication"></Header>
				{this.renderContent()}
			</View>
		)
	}
}

export default App;