import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import axios from 'axios';


class ProfilePage extends Component{
    state = {
		user:{
			username:null,
			email:null,
			first_name:null,
			last_name:null,
			languages:null,
			is_guide:null,
			is_tourist:null,
			avatar:null,
		},
		rating:null,
		places_known:null
	}
	errmessage;
	
	handleLogout=()=>{
		localStorage.clear();
		try{
			this.props.setUser(null);
		}
		finally{
			window.location.pathname = '/message';
			// window.location.reload();
		}
	}

	accountDelete = () => {
		const username = this.props.match.params.username;
        const config = {
			headers: {
				Authorization: localStorage.getItem('token')
			}
		};
		if(config.headers.Authorization != null){
			axios.delete('http://localhost:8000/accounts/user/' + username + '/', config).then(
				res => {
					this.setUser(res.data);
				},
				err => {
					console.log(err)
				}
			)	
		}
		this.handleLogout();
	}
	  
    componentDidMount = () => {
        const username = this.props.match.params.username;
        const config = {
			headers: {
				Authorization: localStorage.getItem('token')
			}
		};
		if(config.headers.Authorization != null){
			axios.get('http://localhost:8000/accounts/user/' + username + '/', config).then(
				res => {
					this.setUser(res.data);
				},
				err => {
					console.log(err)
				}
			)	
		}
	}
	handleChangePassword = e => {
        e.preventDefault();
        var data = {email:this.state.user.email};
        axios.post('http://localhost:8000/accounts/request-reset-email/', data).then(
            res => {
                this.setState({
                    message: res.data.success,
                    cls: 'success'
                })
            }
        ).catch(
            err => {
                this.setState({
                    message: err.response.data.email,
                    cls: 'danger'
                })
            }
		)
		this.handleLogout();
    };
    setUser = user => {
		this.setState({
			user:{
				username: user.user.username,
				email: user.user.email,
				first_name: user.user.first_name,
				last_name: user.user.last_name,
				languages: user.user.languages,
				is_guide: user.user.is_guide,
				is_tourist: user.user.is_tourist,
				avatar:user.user.avatar,
			},
			rating: user.rating,
			places_known:user.places_known
        });
    };
    render(){
		let rating,profilepic,err,updateprofile;
        const username = this.props.match.params.username;
        updateprofile = '/update-profile/'+username + '/';
		profilepic = 'http://localhost:3000'+this.state.user.avatar;
		if(this.state.user.is_guide===true){
			rating = (
				<p className="proile-rating">RATING : <span> {this.state.rating}/10</span></p>
			)
		}
		if(this.state.user.username === null){
			err = (
				<div className="alert alert-danger alert-dismissible" style={{ marginTop:'100px' }}>
					<button type="button" className="close" data-dismiss="alert">&times;</button>
					<strong>Please authenticate or invalid user details.</strong>
				</div>
			)
		}
        return(
            <div>
				{err}
				{this.errmessage}
                <div className="container emp-profile" style={{ marginTop:'100px' }}>
					<div className="row">
						<div className="col-md-4">
							<div className="profile-img">
								<img src={profilepic} style={{ height:'125px',width:'125px',borderRadius:'40%' }}alt=""/>
							</div>
						</div>
						<div className="col-md-6">
							<div className="profile-head">
										<h5>
											{this.state.user.first_name} {this.state.user.last_name}
										</h5>
										<h6>
											@{this.state.user.username}
										</h6>
										{rating}
								<ul className="nav nav-tabs" id="myTab" role="tablist">
									<li className="nav-item">
										<a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="profile-work">
								<p>Account Settings</p>
								<a href=""><NavLink to={updateprofile}>Update profile</NavLink></a><br/>
								<a href="">Notifications</a><br/>
								<a onClick={this.handleChangePassword} href="">Change Password</a><br/>
								<a onClick={this.accountDelete} href="" style={{color:'red'}}>Delete Account</a><br/>
							</div>
						</div>
						<div className="col-md-8">
							<div className="tab-content profile-tab" id="myTabContent">
								<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
											<div className="row">
												<div className="col-md-6">
													<label>Email</label>
												</div>
												<div className="col-md-6">
													<p>{this.state.user.email}</p>
												</div>
											</div>
											<div className="row">
												<div className="col-md-6">
													<label>Phone</label>
												</div>
												<div className="col-md-6">
													<p>1234567890</p>
												</div>
											</div>
											<div className="row">
												<div className="col-md-6">
													<label>Profession</label>
												</div>
												<div className="col-md-6">
													<p>Web Developer and Designer</p>
												</div>
											</div>
								</div>
								<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
											<div className="row">
												<div className="col-md-6">
													<label>Experience</label>
												</div>
												<div className="col-md-6">
													<p>Expert</p>
												</div>
											</div>
											<div className="row">
												<div className="col-md-6">
													<label>Hourly Rate</label>
												</div>
												<div className="col-md-6">
													<p>10$/hr</p>
												</div>
											</div>
											<div className="row">
												<div className="col-md-6">
													<label>Total Bookings</label>
												</div>
												<div className="col-md-6">
													<p>230</p>
												</div>
											</div>
											<div className="row">
												<div className="col-md-6">
													<label>English Level</label>
												</div>
												<div className="col-md-6">
													<p>Expert</p>
												</div>
											</div>
											<div className="row">
												<div className="col-md-6">
													<label>Availability</label>
												</div>
												<div className="col-md-6">
													<p>6 months</p>
												</div>
											</div>
									<div className="row">
										<div className="col-md-12">
											<label>Your Bio</label><br/>
											<p>Your detail description</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>
        )
    }
    
}

export default ProfilePage;