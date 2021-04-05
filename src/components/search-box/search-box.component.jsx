import React from 'react';

import './search-box.styles.css';

export const SearchBox = (props) => {
	return (
		<input
			type="search"
			className="search"
			placeholder={props.placeholder}
			value={props.searchField}
			onChange={props.handleChange}
		/>
	);
};
