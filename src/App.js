import './App.css';
import React, { useState } from 'react';
import PropertyList from './components/PropertyList/PropertyList';

// TODO - Use appropriate markup for some of the semantic components
// TODO - Ablity to mark an item as expired
// TODO - different styling for expired item
// TODO - Write some basic tests

function App() {
	const [items, setItems] = useState( [] );

	function fetchData() {
		fetch( 'http://localhost:3004/properties')
			.then( res => res.json() )
			.then( ( result ) => {
				setItems( result );
			})
	}

	React.useEffect(() => {
		fetchData();
	}, []);

	return (
		<div class="container">
			<PropertyList items = { items } />
		</div>
	);
}

export default App;
