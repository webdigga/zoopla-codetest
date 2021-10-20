import React from "react";

function Price ( props ) {
	return (
		<div className="price">
			<strong>{ props.item.askingPrice }</strong>
		</div>
	);
}

export default Price;