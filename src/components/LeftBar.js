import React from 'react';
import Filter from './Filter';
import '../css/LeftBar.css';

const LeftBar = ({ filter: filterList, currentFilter }) => {
	return (
		<div className='left-bar white-block'>
			<p className='left-bar__title'>
				Количество пересадок
			</p>

			<Filter filterList={filterList} currentFilter={currentFilter} />
		</div>
	)
};

export default LeftBar;