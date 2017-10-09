import React from 'react';
import checkMark from '../resources/check-mark.svg';

const checkboxStyle = {
	backgroundImage: `url(${checkMark})`
}

const FilterElement = ({ text, ind }) => {
	return (
		<label key={ind} className='filter__element'>
			<input type='checkbox' className='filter__input-checkbox' />
			<i className='filter__checkbox' style={checkboxStyle}></i>
			<span className='filter__element-text'>{text}</span>
		</label>
	);
};

export default FilterElement;