import React from "react";

import styles from './Date.module.css';

function Date ( props ) {
	return (
		<div className={ styles.date }>
			Listed on <time>{ props.date }</time>
		</div>
	);
}

export default Date;