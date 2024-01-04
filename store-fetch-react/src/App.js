import React from 'react';
import SuccessComponent from './components/SuccessComponent';
import ErrorComponent from './components/ErrorComponent';
import LoadingComponent from './components/LoadingComponent';


const App = () => {
	return (
		<div>
			<h1>Success Component:</h1>
			<SuccessComponent />

			<h1>Error Component:</h1>
			<ErrorComponent />

			<h1>Loading Component:</h1>
			<LoadingComponent />
		</div>
	);
};

export default App;
