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
					<Price askingPrice = { props.item.askingPrice } />
					<Rooms numberOfRooms = { props.item.numberOfRooms } />
					<Description description = { props.item.description } />
					<Address address = { props.item.address } />
				</div>

				<div className={ styles.logo }>
					<Logo logo = { props.item.logo } />
				</div>
			</div>
			
			<div className={ styles.bottom }>
				<Date date = { props.item.dateListed } />
				<Save />
			</div>
		</li>
	);
}

export default PropertyListItem;