import React,{Component} from 'react';
import {Card,CardSection,Button,Input} from './Common'

class LoginForm extends Component {
    state = {email:'',password:''};
    render(){
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
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
export default LoginForm;