import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home';
import Login from './components/Login';
import RegisterGuide from './components/RegisterGuide';
import RegisterTourist from './components/RegisterTourist';
import ResetPassword from './components/ResetPassword';
import ResetPasswordConfirm from './components/ResetPasswordConfirm';
import Navbar from './components/Navbar';

import Contact from './components/Contact';
import Blog from './components/Blog';
import Place from './components/Place';


class App extends Component {
	state = {}
	state = {
		user:null,
	}
	
	componentDidMount = () => {
		const config = {
			headers: {
				Authorization: localStorage.getItem('token')
			}
		};

		// if (localStorage.getItem('name')!=null){
			axios.get('http://localhost:8000/accounts/user/' + localStorage.getItem('username') + '/', config).then(
				res => {
					this.setUser(res.data);
				},
				err => {
					console.log(err)
				}
			)
		// }
		console.log("----------user------------",this.state.user);
	};
	setUser = user => {
		localStorage.setItem('user',JSON.stringify(user)+',');
		this.setState({
			user: localStorage.getItem('user')
		});
	};


	render() {
		return (
			<div>


				<Router>
					<Navbar user={this.state.user} setUser={this.setUser} user={this.state.user}/>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/login' component={() => <Login setUser={this.setUser} />} />
						<Route exact path='/registerGuide' component={RegisterGuide} />
						<Route exact path='/registerTourist' component={RegisterTourist} />
						<Route exact path='/password-reset/' component={ResetPassword} />
						<Route exact path='/password-reset/:uidb64/:token/' component={ResetPasswordConfirm} />

						<Route path='/contact' component={Contact} />
						<Route path='/blog' component={Blog} />
						<Route path='/login' component={Login} />
						<Route path='/place' component={Place} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
