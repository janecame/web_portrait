import CardItem from './CardItem';
import './Cards.css';
import React from 'react';


function Cards() {
	return(
		<div className='cards'>
			<div className='cards__container'>
				<div className="cards__wrapper">
					<ul className='cards__items'>
						<CardItem 
							src="videos/lambo_Trim.mp4"
							text="explore jdjdjdjdjjdjd"
							label='itzy yuna'
							path='/services'
						/>
						<CardItem 
							src="videos/sn15.mp4"
							text="explore jdjdjdjdjjdjd"
							label='adventure'
							path='/services'
						/>
						<CardItem 
							src="videos/dev1.mp4"
							text="explore jdjdjdjdjjdjd"
							label='adventure'
							path='/services'
						/>
						<CardItem 
							src='videos/vid-1.mp4'
							text="explore jdjdjdjdjjdjd"
							label='adventure'
							path='/services'
						/>
					</ul>
					
				</div>
			</div>
		</div>
	);
} 

export default Cards;