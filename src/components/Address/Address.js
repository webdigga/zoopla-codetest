import React from "react";

import styles from './Address.module.css';

function Address ( props ) {
	return (
		<div className={ styles.address }>
			{ props.address }
		</div>
	);
}

export default Address;