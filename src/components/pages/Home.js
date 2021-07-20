import '../../App.css';
import HeroSection from '../HeroSection';
//import Cards from '../Cards';
import IdolList from '../IdolList';
import Footer from '../Footer';
import React from 'react';

function  Home() {

	return (
		<>
			
			<HeroSection />
			<IdolList />
			<Footer />
		</>
	);
}
export default Home;