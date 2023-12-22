import React from 'react';
import '../stylesheet/button.css';

function Button(props) {
	const isOperator = (value) => {
		return isNaN(value) && value !== ',' && value !== '=';
	};
	return (
		<div
			className={`cont-btn ${
				isOperator(props.children) ? 'operator' : ''
			}`.trimEnd()}
			onClick={() => props.handleClick(props.children)}>
			{props.children}
		</div>
	);
}

export default Button;
