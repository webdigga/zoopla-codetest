import './App.css';
import React, { useState } from 'react';
import PropertyList from './components/PropertyList/PropertyList';

// TODO - Write some basic tests

function App() {
	const [items, setItems] = useState( [] );

	function fetchData() {

		// Check if we have local storage here
		// If we have it then fetch fron local storage
		if ( localStorage.getItem( 'properties' ) ) {
			setItems( JSON.parse( localStorage.getItem( 'properties' ) ) );
		
		// Otherwise get from API
		} else {
			fetch( 'http://localhost:3004/properties')
			.then( res => res.json() )
			.then( ( result ) => {
				setItems( result );
			})
		}
	}

	function handleStatusState( item ) {
		const arrIndex = parseInt( item.id ) - 1;
		const itemsCopy = [...items];
		const itemCopy = {...itemsCopy[arrIndex]};
		items[arrIndex] = itemCopy;

		setItems( [...items] );

		// Send the new data to local storage
		localStorage.setItem( 'properties', JSON.stringify( [ ...items ] ) );
	}

	React.useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="container">
			<h1>Product listing</h1>

			<PropertyList
				items = { items }
				onStatusClick = { handleStatusState }
			/>
		</div>
	);
}

export default App;
