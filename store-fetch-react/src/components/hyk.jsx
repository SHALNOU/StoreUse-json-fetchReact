// useJsonFetch.js
import { useState, useEffect } from 'react';

const useJsonFetch = (url, opts) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`http://localhost:7070${url.startsWith('/') ? url : `/${url}`}`, opts);
				const jsonData = await response.json();

				if (!response.ok) {
					throw new Error(jsonData.status || 'Request failed');
				}

				setData(jsonData);
			} catch (err) {
				setError(err.message || 'Request failed');
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [url, opts]);

	return [data, loading, error];
};

export default useJsonFetch;
