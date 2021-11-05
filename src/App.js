import './App.css';
import React, { useState } from 'react';
import PropertyList from './components/PropertyList/PropertyList';

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

	function handleStatusState( item ) {
		const arrIndex = parseInt( item.id ) - 1;
		const itemsCopy = [...items];
		const itemCopy = {...itemsCopy[arrIndex]};
		items[arrIndex] = itemCopy;

		setItems( [...items] )
	}

	React.useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="container">
			<PropertyList
				items = { items }
				onStatusClick = { handleStatusState }
			/>
		</div>
	);
}

export default App;
