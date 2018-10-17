import React,{Component} from 'react';
import {Text,StyleSheet} from 'react-native';
import firebase from 'firebase';
import {Card,CardSection,Button,Input,Spinner} from './Common'

class LoginForm extends Component {
    state = {
        email:'',
        password:'',
        error:'',
        loading:false
    };
    renderButton(){
        if(this.state.loading){
            return <Spinner size="small" />
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }
    onLoginSuccess(){
        this.setState({
            email:'',
            password:'',
            loading:false,
            error:''
        })
    }
    onLoginFail(){
        this.setState({
            error:'Authentication Failed',
            loading:false
        });
    }
    onButtonPress(){
        const {email,password} = this.state;
        this.setState({error:'',loading:true})
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.onLoginSuccess.bind(this))
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this))
        })
    }
    render(){
        const {errorTextStyle} = styles
        return (
            <Card>
                <CardSection>
                    <Input 
                        label = "Email"
                        value={this.state.email}
                        onChangeText={(email)=>this.setState({email:email})}
                        placeholder="user@gmail.com"
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        secureTextEntry
                        label = "Password"
                        value={this.state.password}
                        onChangeText={(password)=>this.setState({password:password})}
                        placeholder="Password"
                    />
                </CardSection>
                <Text style={errorTextStyle}>{this.state.error}</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}
const styles = StyleSheet.create({
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
});
export default LoginForm;