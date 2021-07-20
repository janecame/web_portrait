import './SignUp.css';

import React, {Component} from 'react';
import {PostData} from '../../services/PostData';

import {Redirect} from 'react-router-dom';
class Signup extends Component {
constructor(props){
super(props);
	this.state = {
			username: '',
			password: '',
			email: '',
			name: '',
			redirectToReferrer: false
		};

		this.signup = this.signup.bind(this);
		this.onChange = this.onChange.bind(this);
	}

signup() {
if(this.state.username && this.state.password && this.state.email && this.state.name){
	PostData('signup',this.state).then((result) => {
		let responseJson = result;
	if(responseJson.userData){
		sessionStorage.setItem('userData',JSON.stringify(responseJson));
		this.setState({redirectToReferrer: true});
	}
	else
		alert(result.error);
	});
}
}
onChange(e){
	this.setState({[e.target.name]:e.target.value});
}
render() {
if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
	return (<Redirect to={'/'}/>)
}
return (
	<div className="singupform" id="sBody">
		<div className="medium-5 columns left">
		<h4>inquire</h4>
			<input type="text" name="name" placeholder="Name" onChange={this.onChange}/>
			<input type="text" name="email" placeholder="Email" onChange={this.onChange}/>
			<input type="text" name="Phone Number" placeholder="Phone Number" onChange={this.onChange}/>
			<input type="text" name="Address" placeholder="Address" onChange={this.onChange}/>
		<h4>File</h4>
			<input type="text" name="link" placeholder="Enter Link" onChange={this.onChange}/>
			<input type="file" name="file" onChange={this.onChange}/>
			<br />
			<input type="submit" className="button" value="Submit" onClick={this.signup}/>
		</div>
	</div>
);
}
}
export default Signup;