import React from "react";
import Logo from '../Logo/Logo';
import Image from '../Image/Image';
import Price from '../Price/Price';
import Rooms from '../Rooms/Rooms';
import Description from '../Description/Description';
import Address from '../Address/Address';
import Date from '../Date/Date';
import Save from '../Save/Save';

import styles from './PropertyListItem.module.css';

function PropertyListItem ( props ) {
	return (
		<li className={ styles.item }>
			<div className={ styles.top }>
				<div className={ styles.image }>
					<Image item = { props.item } key = { props.item.id } />
				</div>

				<div className={ styles.meta }>
					<Price item = { props.item } key = { props.item.id } />
					<Rooms item = { props.item } key = { props.item.id } />
					<Description item = { props.item } key = { props.item.id } />
					<Address item = { props.item } key = { props.item.id } />
				</div>

				<div className={ styles.logo }>
					<Logo item = { props.item } key = { props.item.id } />
				</div>
			</div>
			
			<div className={ styles.bottom }>
				<Date item = { props.item } key = { props.item.id } />
				<Save item = { props.item } key = { props.item.id } />
			</div>
			
		</li>
	);
}

export default PropertyListItem;