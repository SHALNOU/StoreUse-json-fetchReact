// SuccessComponent.js
import React from 'react';
import useJsonFetch from './hyk';

const SuccessComponent = () => {
	const [data, loading, error] = useJsonFetch('/data', {});

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return <div>Data: {data.status}</div>;
};

export default SuccessComponent;
