import React from "react";

import styles from './Image.module.css';

function Image ( props ) {
	function clickHandler() {
		console.log( 'Boom' );
	}

	return (
		<div className={ styles.container }>
			<img
				className={ styles.image }
				src={ props.item.image }
				alt="Property for sale"
			/>
			
			<button
				className={ styles.status }
				onClick={ () => { clickHandler() } }>
				{ props.item.status }
			</button>
		</div>
	);
}

export default Image;