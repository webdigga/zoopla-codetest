import React from "react";

function Logo ( props ) {
	return (
		<img 
			src={ props.logo }
			alt="Estate agent logo"
		/>
	);
}

export default Logo;