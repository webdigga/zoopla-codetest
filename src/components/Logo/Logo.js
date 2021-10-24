import React from "react";

function Logo ( props ) {
	return (
		<img 
			src={ props.item.logo }
			alt="Estate agent logo"
		/>
	);
}

export default Logo;