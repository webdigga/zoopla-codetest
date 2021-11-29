import './App.css';
import React, { useState } from 'react';
import PropertyList from './components/PropertyList/PropertyList';
import { StatusContext } from './context/statusContext';

/*
* Consider: itemsCopy.find( ({ id }) => id === item.id )
* Add TypeScript
* Split button from image component.
* Test the click of the button.
*/
function App() {
	const [items, setItems] = useState( [] );

	function onStatusClick( item ) {
		const arrIndex = parseInt( item.id ) - 1;
		const itemsCopy = [...items];
		const itemCopy = {...itemsCopy[arrIndex]};
		items[arrIndex] = itemCopy;

		setItems( [...items] );

		// Send the new data to local storage
		localStorage.setItem( 'properties', JSON.stringify( [ ...items ] ) );
	}

	React.useEffect(() => {
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
			.catch( ( error ) => {
				console.log( `Display error to user here - ${error}` );
			});
		}
	}, []);

	return (
		<main className="container">
			<h1>Product listing</h1>

			<StatusContext.Provider value={ { onStatusClick } }>
				<PropertyList
					items = { items }
				/>
			</StatusContext.Provider>
		</main>
	);
}

export default App;
