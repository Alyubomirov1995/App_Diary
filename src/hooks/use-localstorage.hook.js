import { useState, useEffect } from 'react';

export function useLocalStorage(key, defaultValue) {
	const [data, setData] = useState();

	useEffect(() => {
		const res = JSON.parse(localStorage.getItem(key));
		if (res !== null) {
			setData(res);
		} else {
			setData(defaultValue || []);
			localStorage.setItem(key, JSON.stringify(defaultValue || []));
		} 
	}, [key, defaultValue]);

	const saveData = (newData) => {
		const dataToSave = newData === null ? [] : newData; 
		localStorage.setItem(key, JSON.stringify(dataToSave));
		setData(dataToSave);
	};

	return [data, saveData];
}