import { useContext } from 'react';
import { ValuesContext } from '../contexts/values';

const useCalculations = () => {
	const { values, setValues } = useContext(ValuesContext);

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
