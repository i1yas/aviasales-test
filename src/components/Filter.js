import React from 'react';
import FilterElement from './FilterElement';
import '../css/Filter.css';
import { formatStopWord } from '../utils/ticketFormatters';

const Filter = ({ filterList, currentFilter }) => {
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

	const checked = (el) => {
		return currentFilter.indexOf(el.key) !== -1;
	}

	return (
		<div className='filter'>
			{elements.map((el, ind) =>
				<FilterElement
					data={el}
					key={ind}
					filterList={filterList}
					checked={checked(el)}
				/>
			)}
		</div>
	)
}

export default Filter;