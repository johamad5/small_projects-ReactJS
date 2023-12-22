import React from 'react';
import '../stylesheet/cleanButton.css';

function CleanButton(props) {
	return (
		<div className="cleanBtn" onClick={props.handleClean}>
			{props.children}
		</div>
	);
}

export default CleanButton;
