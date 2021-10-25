import './App.css';
import React, { useState } from 'react';
import PropertyList from './components/PropertyList/PropertyList';

// TODO - Ablity to mark an item as expired
// TODO - different styling for expired item
// TODO - store data in local storage and check for this before fetching from API?
// TODO - Write some basic tests
// TODO - Update readme
// TODO - Tidy up empty divs

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
		<div className="container">
			<PropertyList items = { items } />
		</div>
	);
}

export default App;
