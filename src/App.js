import './App.css';
import React, { useState } from 'react';
import PropertyList from './components/PropertyList/PropertyList';
import { StatusContext } from './statusContext';

/*
* Consider: itemsCopy.find( ({ id }) => id === item.id )
* onStatusClick passed down to multiple components. Consider Context (https://reactjs.org/docs/context.html)
* Found the Image component a little confusing with the button present and passing in the whole item.
* Tests present but basic ‘render’. Would have liked to have seen the user clicking the expire button etc.
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

			<StatusContext.Provider value={ onStatusClick }>
				<PropertyList
					items = { items }
				/>
			</StatusContext.Provider>
		</main>
	);
}

export default App;
