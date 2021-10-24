import React from "react";

import styles from './Image.module.css';

function Image ( props ) {
	return (
		<img
			className={ styles.image }
			src={ props.item.image }
			alt="Property for sale"
		/>
	);
}

export default Image;