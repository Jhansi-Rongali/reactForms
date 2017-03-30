import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from './components/home.js';
import SignUp from './components/SignUp.js';
import SignIn from './components/SignIn.js';

class Main extends React.Component{
	render(){
		return(
		<div>
			<Router history={hashHistory}>
				<Route path='/' component={Home}> 	
					//<IndexRoute component={SignUp}></IndexRoute>
					<Route path='SignUp' component={SignUp}></Route>
					<Route path='SignIn' component={SignIn}></Route>
				</Route>
			</Router>
		</div>	
		)
	};
}

ReactDOM.render(<Main />, document.getElementById('app'));

