import React from 'react';
import FilterElement from './FilterElement';
import '../css/Filter.css';
import { formatStopWord } from '../utils/ticketFormatters';

const Filter = (props) => {
	const elements = [];
	for(let i = 0; i < 3; i++) {
		elements.push({
			text: formatStopWord(i),
			key: i
		});
	}

	elements.unshift({
		text: 'Все',
		key: 'all'
	});

	return (
		<div className='filter'>
			{elements.map((el, ind) =>
				<FilterElement data={el} key={ind} />
			)}
		</div>
	)
}

export default Filter;