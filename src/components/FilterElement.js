import React from 'react';

const FilterElement = ({ text, ind }) => {
	return (
		<div key={ind} className='filter__element'>
			{text}
		</div>
	);
};

export default FilterElement;