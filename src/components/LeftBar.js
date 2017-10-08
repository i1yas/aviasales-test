import React from 'react';
import Filter from './Filter';
import '../css/LeftBar.css';

const LeftBar = (props) => {
	return (
		<div className='left-bar white-block'>
			<p className='left-bar__title'>
				Количество пересадок
			</p>

			<Filter />
		</div>
	)
};

export default LeftBar;