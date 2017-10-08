import React from 'react';
import FilterElement from './FilterElement';
import '../css/Filter.css';

const Filter = (props) => {
	const elements = [
		'Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'
	];

	return (
		<div className='filter'>
			{elements.map((el, ind) =>
				<FilterElement text={el} key={ind} />
			)}
		</div>
	)
}

export default Filter;