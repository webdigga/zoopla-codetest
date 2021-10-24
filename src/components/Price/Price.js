import React from "react";

import styles from './Price.module.css';

function Price ( props ) {
	return (
		<div className={ styles.price }>
			<strong>{ props.item.askingPrice }</strong>
		</div>
	);
}

export default Price;