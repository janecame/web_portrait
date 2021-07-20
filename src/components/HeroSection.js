import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection(){
	return(
		<div className='hero-container'>
			//<video src="/videos/video3.mp4" autoPlay loop muted />

			<div className='hero-content'>
			<h1>OUR HISTORY</h1>
			<p>kepler 1042</p>
				<div className="hero-btns">
					<Button className='btns' 
					buttonStyle='btn--outline'
					buttonSize='btn--large'
					>
					GET STARTED
					</Button>
					<Button className='btns' 
					buttonStyle='btn--primary'
					buttonSize='btn--large'
					>
					SIGN UP 
					</Button>
				</div>
			</div>

		</div>
	)
}

export default HeroSection;
