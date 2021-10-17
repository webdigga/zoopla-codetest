import React from "react";
import PropertyListItem from '../PropertyListItem/PropertyListItem'

function PropertyList ( props ) {
	return (
		<ul>
			{
				props.items.map( ( item ) => {
					return (
						<PropertyListItem item = { item } key = { item.id } />
					)
				})
			}
		</ul>
	);
}

export default PropertyList;