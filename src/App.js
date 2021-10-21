import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import PropertyList from './components/PropertyList/PropertyList';

// TODO - Add Agency logo to db JSON and output in component
// TODO - Use appropriate markup for some of the semantic components
// TODO - Proximity?
// TODO - Label list array in db and output in component
// TODO - Add list item layout styles
// TODO - Add component styles
// TODO - Ablity to mark an item as expired
// TODO - different styling for expired item


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
