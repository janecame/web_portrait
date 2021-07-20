
import React from 'react';
import './Posts.css';
import './Cards.css';
import CardItem from './CardItem';
function Posts() {
	return(
		<div className="post_container">
			<div className="post">
				
					<div className='cards__container'>
						<div className="cards__wrapper">
							<ul className='cards__items'>
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
		</div>
	);
} 

export default Posts;