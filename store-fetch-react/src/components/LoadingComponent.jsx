// LoadingComponent.js
import React from 'react';
import useJsonFetch from './hyk';

const LoadingComponent = () => {
	const [data, loading, error] = useJsonFetch('/loading', {});

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return <div>Data: {data.status}</div>;
};

export default LoadingComponent;