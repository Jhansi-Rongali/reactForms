import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router';
import SignUp from './SignUp.js';
import SignIn from './SignIn.js';
class Home extends React.Component{
	render() {
    return (
      <div>
			<Link to="SignUp" onclick>Sign Up</Link>
			{' 	'}
			<Link to="SignIn">Sign In</Link>
			{this.props.children}
	  </div>
    );
  }
}
export default Home;