import React,{Component} from 'react';
import {FormControl, FormGroup,Col, Form, ControlLabel, HelpBlock, Checkbox, Radio, Button} from 'react-bootstrap';

class Signin extends Component{
	
		render(){
			return(
			<div>
				<Form className="signIn">
					<FormGroup controlId="si_userName">
						<ControlLabel>Username</ControlLabel>
						<FormControl type="text" placeholder="Enter your Username"></FormControl>
					</FormGroup>
					<FormGroup controlId="si_password">
						<ControlLabel>Password</ControlLabel>
						<FormControl type="password" placeholder="Enter a password"></FormControl>
					</FormGroup>
					<FormGroup controlId="remember_pw">
						<Checkbox inline>Remember me</Checkbox> 
					</FormGroup>
					<Button block type="submit">Sign In</Button>
				</Form>
			</div>
			)
		}
} 

export default Signin;