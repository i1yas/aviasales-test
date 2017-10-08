import React from 'react';
import checkMark from '../resources/check-mark.svg';

const checkboxStyle = {
	backgroundImage: `url(${checkMark})`
}

const FilterElement = ({ text, ind }) => {
	return (
		<label key={ind} className='filter__element'>
			<i className='filter__checkbox' style={checkboxStyle}></i>
			<input type='checkbox' className='filter__input-checkbox' />
			<span className='filter__element-text'>{text}</span>
		</label>
	);
};

export default FilterElement;