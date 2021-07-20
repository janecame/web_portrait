import React, {useState} from 'react';
import { Link } from 'react-router-dom';	
import './Navbar.css';
import { Button } from './Button';
import {PostData} from '../services/PostData';


function Navbar(){

	  const [click, setClick] = useState(false);
  	const [button, setButton] = useState(true);
  	
    const handleClick = () => setClick(!click);
  	const closeMobileMenu = () => setClick(false);

  	const showButton = () => {
  		if(window.innerWidth <= 960){
  			setButton(false);
  		} else {
  			setButton(true);
  		}

  	};

    const logout = () =>{
      sessionStorage.clear();
    }

    window.addEventListener('resize', showButton);
       

  return (
    <>
      <nav className="navbar">
      		<div className="navbar-container">
      			<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
      			TRVL <i className="fab fa-typo3" />

      			</Link>
  
      			<div className="menu-icon" onClick={handleClick}>
      				<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      			</div>
      			<ul className={click ? 'nav-menu active' : 'nav-menu'}>
      				<li className='nav-item'>
      					<Link to='/services' className='nav-links' onClick={closeMobileMenu}>
      						Works
      					</Link>
      				</li>
      				<li className='nav-item'>
      					<Link to='/products' className='nav-links' onClick={closeMobileMenu}>
      						Artists
      					</Link>
      				</li>
      				<li className='nav-item'>
      					<Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
      						Contact Us
      					</Link>
      				</li>
      			</ul>
            {button && <Button buttonStyle='btn--outline'>GET STARTED</Button>}
      		</div>
      </nav>
    </>
  );
}

export default Navbar;
