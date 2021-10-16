import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
	function fetchData() {
		fetch( 'http://localhost:3004/properties')
			.then( res => res.json() )
			.then( ( result ) => {
				console.log( result );
			})
	}

	React.useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="App">
			Zoopla codetest
		</div>
	);
}

export default App;
