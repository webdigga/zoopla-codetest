import React from "react";

import styles from './Description.module.css';

function Description ( props ) {
	return (
		<div className={ styles.description }>
			{ props.description }
		</div>
	);
}

export default Description;