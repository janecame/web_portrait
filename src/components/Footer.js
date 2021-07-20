import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';
function Footer() {

	return(
		<div className='footer-container'>
			<section className='footer-subscription'>
				<p className="footer-subscription-heading">
					Sample text
				</p>
				<p className="footer-subscription-text">
					Subscribe!!
				</p>
				<div className='input-areas'>
					<form>
						<input type='email' name='email' placeholder='Your Email' className='footer-input'/>
						<Button buttonStyle='btn--outline'>Subscribe</Button>
					</form>
				</div>
			</section>
			<div className='footer-links'>
				<div className='footer-link-wrapper'>
					<div className='footer-link-items'>
						<h2>SubLinks</h2>
						<Link to='/sign-up'>Test text</Link>
			
						<Link to='/'>Test text 1</Link>
						<Link to='/'>Test text 2</Link>
						<Link to='/'>Test text 3</Link>
						<Link to='/'>Test text 4</Link>
					</div>
					<div className='footer-link-items'>
						<h2>SubLinks</h2>
						<Link to='/sign-up'>Test text</Link>
						<Link to='/'>Test text 1</Link>
						<Link to='/'>Test text 2</Link>
						<Link to='/'>Test text 3</Link>
						<Link to='/'>Test text 4</Link>
					</div>
					<div className='footer-link-items'>
						<h2>SubLinks</h2>
						<Link to='/sign-up'>Test text</Link>
						<Link to='/'>Test text 1</Link>
						<Link to='/'>Test text 2</Link>
						<Link to='/'>Test text 3</Link>
						<Link to='/'>Test text 4</Link>
					</div>
					<div className='footer-link-items'>
						<h2>SubLinks</h2>
						<Link to='/sign-up'>Test text</Link>
						<Link to='/'>Test text 1</Link>
						<Link to='/'>Test text 2</Link>
						<Link to='/'>Test text 3</Link>
						<Link to='/'>Test text 4</Link>
					</div>
				</div>
			</div>
			<section className="social-media">
				<div className="social-media-wrap">
					<div className="footer-logo">
						<Link to="/" className='social-logo'>
							TRVL <i className="fab fa-typo3" />

						</Link>
					</div>
					<small className='website-rights'>TRVL &copy; 2020</small>
					<div className='social-icons'>
						<Link to="/" className='social-icon-link facebook'
									 to='/'
									 target='_blank'
									 arial-label='Facebook'
									 >
							<i className="fab fa-facebook-f" />
						</Link>
				
						<Link to="/" className='social-icon-link instagram'
									 to='/'
									 target='_blank'
									 arial-label='Instagram'
									 >
							<i className="fab fa-instagram" />
						</Link>
				
						<Link to="/" className='social-icon-link twitter'
									 to='/'
									 target='_blank'
									 arial-label='Twitter'
									 >
							<i className="fab fa-twitter" />
						</Link>
				
						<Link to="/" className='social-icon-link linkedin'
									 to='/'
									 target='_blank'
									 arial-label='LinkedIn'
									 >
							<i className="fab fa-linkedin" />
						</Link>
					</div>
				</div>
			</section>

		</div>
	);
}
export default Footer;