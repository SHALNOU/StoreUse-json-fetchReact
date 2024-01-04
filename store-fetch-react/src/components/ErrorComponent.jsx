import React from 'react';
import useJsonFetch from './hyk';

const ErrorComponent = () => {
	const [data, loading, error] = useJsonFetch('/error', {});

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return <div>Data: {data.status}</div>;
};

export default ErrorComponent;
