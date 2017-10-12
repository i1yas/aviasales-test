import React from 'react';
import checkMark from '../resources/check-mark.svg';

const checkboxStyle = {
	backgroundImage: `url(${checkMark})`
}

const FilterElement = ({ data, ind, filterList, checked }) => {
	const handleLabelClick = data => {
		filterList(data.key);
	}
	const handleInputClick = event => {
		event.stopPropagation();
	}
	const handleButtonClick = event => {
		filterList(data.key, true)
		event.stopPropagation();
	}

	return (
		<label
			key={ind}
			className='filter__element'
			onClick={handleLabelClick.bind(this, data)}
		>
			<input
				type='checkbox'
				className='filter__input-checkbox'
				checked={checked}
				onClick={handleInputClick}
				onChange={e => !e.target.value}
			/>
			<i className='filter__checkbox' style={checkboxStyle}></i>
			<span className='filter__element-text'>{data.text}</span>
			<button
				className='filter__element-only-button'
				onClick={handleButtonClick}
			>
				Только
			</button>
		</label>
	);
};

export default FilterElement;