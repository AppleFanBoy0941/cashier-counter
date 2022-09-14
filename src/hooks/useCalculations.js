import { useState, useContext } from 'react';
import { ValuesContext } from '../contexts/values';

const useCalculations = () => {
	const { values, setValues } = useContext(ValuesContext);
	// const [values, setValues] = useState([
	// 	{ id: '1000s', value: '' },
	// 	{ id: '500s', value: '' },
	// 	{ id: '200s', value: '' },
	// 	{ id: '100s', value: '' },
	// 	{ id: '50s', value: '' },
	// 	{ id: '20m', value: '' },
	// 	{ id: '10m', value: '' },
	// 	{ id: '5m', value: '' },
	// 	{ id: '2m', value: '' },
	// 	{ id: '1m', value: '' },
	// 	{ id: '05m', value: '' },
	// 	{ id: '400b', value: '' },
	// 	{ id: '200b', value: '' },
	// 	{ id: '100b', value: '' },
	// 	{ id: '50b', value: '' },
	// 	{ id: '25b', value: '' },
	// 	{ id: '20b', value: '' },
	// ]);

	const setNewValue = (id, value) => {
		const newValues = values.map(item => {
			if (item.id === id) {
				return { ...item, value };
			}
			return item;
		});
		setValues(newValues);
	};

	const calculateTotal = () => {
		const total = values.reduce((acc, item) => {
			return acc + item.value * item.multiplier;
		}, 0);
		return total;
	};

	const resetValues = () => {
		const newValues = values.map(item => {
			return { ...item, value: '' };
		});
		setValues(newValues);
	};

	return { values, setNewValue, calculateTotal, resetValues };
};

export default useCalculations;
