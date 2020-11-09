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
	componentDidMount = () => {
		const config = {
			headers: {
				Authorization: localStorage.getItem('token')
			}
		};

		axios.get('http://localhost:8000/accounts/user/' + localStorage.getItem('name') + '/', config).then(
			res => {
				this.setUser(res.data);
			},
			err => {
				console.log(err)
			}
		)
	};
	setUser = user => {
		this.setState({
			user: user
		});
		console.log(user);
	};


	render() {
		return (
			<div>


				<Router>
					<Navbar user={this.state.user} setUser={this.setUser} />
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
