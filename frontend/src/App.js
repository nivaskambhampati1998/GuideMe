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
import ProfilePage from './components/ProfilePage';
import Testimonial from './components/Testimonial';
import Blogdetails from './components/Blogdetails';


class App extends Component {
	state = {
		user:null,
	}
	
	componentDidMount = () => {
		const config = {
			headers: {
				Authorization: localStorage.getItem('token')
			}
		};

		if(config.headers.Authorization != null){
			axios.get('http://localhost:8000/accounts/user/' + localStorage.getItem('username') + '/', config).then(
				res => {
					console.log(res);
					this.setUser(res.data);
				},
				err => {
					console.log(err)
				}
			)
		}
	};
	setUser = user => {
		console.log(user)
		this.setState({
			user: user
		});
	};


	render() {
		let username = '/profile/'+localStorage.getItem('username');
		return (
			<div>
				<Router>
					<Navbar user={this.state.user} setUser={this.setUser} username={username}/>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/login' component={() => <Login setUser={this.setUser} />} />
						<Route exact path='/registerGuide' component={RegisterGuide} />
						<Route exact path='/registerTourist' component={RegisterTourist} />
						<Route exact path='/accounts/password-reset/' component={ResetPassword} />
						<Route exact path='/accounts/password-reset/:uidb64/:token/' component={ResetPasswordConfirm} />

						<Route exact path='/profile/:username/' setUser={this.setUser} component={ProfilePage} />
						<Route path='/blogdetails' component={Blogdetails} />
						<Route path='/testimonial' component={Testimonial} />
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
