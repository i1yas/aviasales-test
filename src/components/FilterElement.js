import React from 'react';
import checkMark from '../resources/check-mark.svg';

const checkboxStyle = {
	backgroundImage: `url(${checkMark})`
}

const FilterElement = ({ data, ind, filterList, checked }) => {
	const handleClick = data => {
		filterList(data.key);
	}

	return (
		<label
			key={ind}
			className='filter__element'
			onClick={handleClick.bind(this, data)}
		>
			<input type='checkbox' className='filter__input-checkbox' checked={checked} />
			<i className='filter__checkbox' style={checkboxStyle}></i>
			<span className='filter__element-text'>{data.text}</span>
		</label>
	);
};

export default FilterElement;