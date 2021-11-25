import React from "react";

import styles from './Image.module.css';

import { StatusContext } from '../../statusContext';

function Image ( props ) {
	return (
		<StatusContext.Consumer>
			{({ onStatusClick }) => (
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
						onClick={ () => {
							props.item.status = props.item.status === 'active' ? 'expired': 'active';
							onStatusClick( props.item );
						} }>
						{ props.item.status }
					</button>
					
				</div>
			)}
		</StatusContext.Consumer>
	);
}

export default Image;