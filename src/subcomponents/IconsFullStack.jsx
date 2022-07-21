import React from 'react';
import '../css/subcomponents/iconsFullStack.css';

const IconsFullStack = ({ item }) => {
	return (
		<div className="ifs__icons">
			<span>{item.name}</span>
			<div className={item.class}>{item.icon}</div>
		</div>
	);
};

export default IconsFullStack;
