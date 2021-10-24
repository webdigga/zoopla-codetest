import React from "react";

import styles from './Description.module.css';

function Description ( props ) {
	return (
		<div className={ styles.description }>
			{ props.item.description }
		</div>
	);
}

export default Description;