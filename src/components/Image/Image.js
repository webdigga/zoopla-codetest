import React from "react";

import styles from './Image.module.css';

function Image ( props ) {
	function changeStatus( item ) {
		item.status = item.status === 'active' ? 'expired': 'active';

		props.onStatusClick( props.item );
	}

	return (
		<div className={ styles.container }>
			<img
				className={ styles.image }
				src={ props.item.image }
				alt={ props.item.description }
				width="430px"
				height="310px"
			/>
			
			<button
				className={ `${styles.status} ${styles[props.item.status]}` }
				onClick={ () => { changeStatus( props.item ) } }>
				{ props.item.status }
			</button>
		</div>
	);
}

export default Image;