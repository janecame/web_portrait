import CardItemIdol from './CardItemIdol';
import './Section-2.css';
import React from 'react';


function IdolList() {
	return(
		<>

		<div className='idols_cards'>
			<h1> Works </h1>
			<div className='idols_cards__container'>
				<div className="idols_cards__wrapper">
					<ul className='idols_cards__items'>
						<CardItemIdol 
							src="images/img-10.jpeg"
							text="Shin Yuna"
							
							path='/IdolPage'
						/>
						<CardItemIdol 
							src="images/Nancy.jpg"
							text="Nancy "
							
							path='/IdolPage'
						/>
						<CardItemIdol 
							src="images/i_am_young22.jpg"
							text="i_am_young22"
							
							path='/IdolPage'
						/>

					</ul>
					
				</div>
			</div>
		</div>
		</>
	);
} 

export default IdolList;