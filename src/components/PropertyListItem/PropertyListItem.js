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
				<Image
					item = { props.item }
					onStatusClick = { props.onStatusClick }
				/>

				<div className={ styles.meta }>
					<Price item = { props.item } />
					<Rooms item = { props.item } />
					<Description item = { props.item } />
					<Address item = { props.item } />
				</div>

				<div className={ styles.logo }>
					<Logo item = { props.item } />
				</div>
			</div>
			
			<div className={ styles.bottom }>
				<Date item = { props.item } />
				<Save item = { props.item } />
			</div>
		</li>
	);
}

export default PropertyListItem;