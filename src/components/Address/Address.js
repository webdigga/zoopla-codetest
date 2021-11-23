import React from "react";

import styles from './Address.module.css';

function Address ( props ) {
	return (
		<address className={ styles.address }>
			{ props.address }
		</address>
	);
}

export default Address;