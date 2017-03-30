import React,{Component} from 'react';
import {FormControl, FormGroup,Col, Form, ControlLabel, HelpBlock, Checkbox, Radio, Button} from 'react-bootstrap';

class Signup extends Component{
	
		render(){
			return(
			<div>	
				<Form className="signUp">
					<FormGroup controlId="name">
						<ControlLabel>Name</ControlLabel>
						<FormControl type="text" placeholder="Enter your Name"></FormControl>
					</FormGroup>
					<FormGroup controlId="username">
						<ControlLabel>Username</ControlLabel>
						<FormControl type="text" placeholder="Enter a Username"></FormControl>
					</FormGroup>
					<FormGroup controlId="password">
						<ControlLabel>Password</ControlLabel>
						<FormControl type="password" placeholder="Enter a password"></FormControl>
					</FormGroup>
					<FormGroup controlId="password_CF">
						<ControlLabel>Confirm Password</ControlLabel>
						<FormControl type="password" placeholder="Confirm your password"></FormControl>
					</FormGroup>
					<FormGroup controlId="emailId">
						<ControlLabel>Email Id</ControlLabel>
						<FormControl type="email" placeholder="Enter your Email Id"></FormControl>
					</FormGroup>
					<FormGroup controlId="gender">
						<ControlLabel>Gender </ControlLabel>
						{' '}
						<Radio inline>Female</Radio>
						{' '}
						<Radio inline>Male</Radio>
						{' '}
						<Radio inline>Other</Radio>
					</FormGroup>
					 <FormGroup controlId="state">
						<ControlLabel>Select</ControlLabel>
							<FormControl componentClass="select" placeholder="Select...">
								<option value="argentina">Argentina</option>
								<option value="utah">Utah</option>
								<option value="idaho">Idaho</option>
								<option value="colorado">Colorado</option>
								</FormControl>
					</FormGroup>
					<FormGroup controlId="email_subscription">
						<Checkbox inline>Send me email notifications </Checkbox> 
					</FormGroup>
					<Button bsStyle="success" block type="submit">Sign Up</Button>
				</Form>
			</div>
			)
		}
} 

export default Signup;