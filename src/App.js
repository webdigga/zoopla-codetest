import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import PropertyList from './components/PropertyList/PropertyList';

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
		<div className="App">
			<PropertyList items = { items } />
		</div>
	);
}

export default App;
