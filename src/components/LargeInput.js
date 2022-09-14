import useCalculations from '../hooks/useCalculations';

const LargeInput = ({ id }) => {
	const { values } = useCalculations();
	const currentValue = values.find(item => item.id === id).value;

	return (
		<input
			className="bg-slate-100 py-8 w-full rounded-md text-3xl font-bold text-center font-mono shadow-inner shadow-slate-200/50 focus:outline-none"
			type="text"
			readOnly="readOnly"
			value={currentValue !== 0 ? currentValue : ''}
			placeholder="0"
		/>
	);
};

export default LargeInput;
