import React from "react";
import Logo from '../Logo/Logo';
import Image from '../Image/Image';
import Price from '../Price/Price';
import Rooms from '../Rooms/Rooms';
import Description from '../Description/Description';
import Address from '../Address/Address';
import Proximity from '../Proximity/Proximity';
import Date from '../Date/Date';
import LabelList from '../LabelList/LabelList';
import Save from '../Save/Save';

function PropertyListItem ( props ) {
	return (
		<li>
			<Logo item = { props.item } key = { props.item.id } />
			<Image item = { props.item } key = { props.item.id } />
			<Price item = { props.item } key = { props.item.id } />
			<Rooms item = { props.item } key = { props.item.id } />
			<Description item = { props.item } key = { props.item.id } />
			<Address item = { props.item } key = { props.item.id } />
			<Proximity item = { props.item } key = { props.item.id } />
			<Date item = { props.item } key = { props.item.id } />
			<LabelList item = { props.item } key = { props.item.id } />
			<Save item = { props.item } key = { props.item.id } />
		</li>
	);
}

export default PropertyListItem;