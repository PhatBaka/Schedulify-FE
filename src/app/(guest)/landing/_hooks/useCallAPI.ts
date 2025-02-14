'use client';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url, { method: 'GET' }).then((res) => res.json());

const useCallAPI = () => {
	const api = process.env.NEXT_PUBLIC_API_URL;
	const { data, error, isLoading } = useSWR(`${api}/api/schools?pageSize=3`, fetcher, {
		revalidateOnFocus: false,
		revalidateOnReconnect: true,
		revalidateIfStale: true,
	});

	return {
		data,
		isLoading,
		error,
	};
};

export default useCallAPI;
