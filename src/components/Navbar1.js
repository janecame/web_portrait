import React, {Component} from 'react';
import { Link } from 'react-router-dom';	
import './Navbar.css';
import { Button } from './Button';
import {PostData} from '../services/PostData';

class Navbar1 extends Component {

constructor(props) {
super(props);

this.state = {
	userFeed: '',
	redirectToReferrer: false,
  name:'',
	
};


this.getUserFeed = this.getUserFeed.bind(this);
this.logout = this.logout.bind(this);
}

componentWillMount() {

	if(sessionStorage.getItem("userData")){
		this.getUserFeed();
	}
	else{
		this.setState({redirectToReferrer: true});
	}

}


getUserFeed() {

	let data = JSON.parse(sessionStorage.getItem("userData"));
	this.setState({name:data.userData.name});
	let postData = { user_id: data.userData.user_id};

	if (data) {
	PostData('feed', postData).then((result) => {
			let responseJson = result;
		if(responseJson.feedData){
			this.setState({data: responseJson.feedData});
			console.log(this.state);
			}
		});
	}

}

logout(){
sessionStorage.setItem("userData",'');
sessionStorage.clear();
this.setState({redirectToReferrer: true});
}

	/*
  	
    handleClick(){
    	this.setState(false)
    }
  	closeMobileMenu(){
  		this.setState(false);
  	}

  	showButton (){
  		if(window.innerWidth <= 960){
  			this.setState(false);
  		} else {
  			this.setState(true);
  		}

  	};

    //window.addEventListener('resize', showButton);
  */

render() {

return (
		<>
		 <nav className="navbar">
      		<div className="navbar-container">
      			<Link to="/" className="navbar-logo" onClick={this.state.closeMobileMenu}>
      			TRVL <i className="fab fa-typo3" />

      			</Link>
      			<div className="menu-icon" onClick={this.handleClick}>
      				<i className={this.state.click ? 'fas fa-times' : 'fas fa-bars'} />
      			</div>
      			<ul className={this.state.click ? 'nav-menu active' : 'nav-menu'}>
      				<li className='nav-item'>
      					<Link to='/' className='nav-links' onClick={this.closeMobileMenu}>
      						Home
      					</Link>
      				</li>
      				<li className='nav-item'>
      					<Link to='/services' className='nav-links' onClick={this.closeMobileMenu}>
      						Services
      					</Link>
      				</li>
      				<li className='nav-item'>
      					<Link to='/products' className='nav-links' onClick={this.closeMobileMenu}>
      						Products
      					</Link>
      				</li>
      				<li className='nav-item'>
      					<Link to='/sign-up' className='nav-links' onClick={this.closeMobileMenu}>
      						Sign Up
      					</Link>
      				</li>
              <li className='nav-item'>
                <Link to='/IdolPage' className='nav-links' onClick={this.closeMobileMenu}>
                   {this.state.name}
                </Link>
              </li>
      			</ul>
      			{Button && <Button buttonStyle='btn--outline'>Connect Wallet</Button>}
            {Button && <Button buttonStyle='btn--outline' onClick={this.logout}>logout</Button>}
      		</div>
      </nav>
		</>
	);
  }
}

export default Navbar1;