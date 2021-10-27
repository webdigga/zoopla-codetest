import React from "react";
import PropertyListItem from '../PropertyListItem/PropertyListItem';

import styles from './PropertyList.module.css';

function PropertyList ( props ) {
	return (
		<ul className={ styles.list }>
			{
				props.items.map( ( item ) => {
					return (
						<PropertyListItem
							item = { item }
							key = { item.id }
							onStatusClick = { props.onStatusClick }
						/>
					)
				})
			}
		</ul>
	);
}

export default PropertyList;