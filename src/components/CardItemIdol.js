import React from 'react';
import { Link } from 'react-router-dom';

function CardItemIdol(props) {
	return(
		<>
			<li className="idols_cards__item">
				<Link className="idols_cards__item__link" to={props.path}>
					<figure className="idols_cards__item__pic-wrap" data-category={props.label}> 
						<img src={props.src} alt='Travel Image' className='idols_cards__item__img'/>
					</figure>
					 <div className='idols_cards__item__info'>
						<h5 className='idols_cards__item__text'>{props.text}<i className="fa fa-check-circle"></i></h5>
					</div>


				</Link>
			</li>
		</>
	);
} 

export default CardItemIdol;

		