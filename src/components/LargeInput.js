import useCalculations from '../hooks/useCalculations';
import { motion } from 'framer-motion';

const LargeInput = ({ id }) => {
	const { values } = useCalculations();
	const currentValue = values.find(item => item.id === id).value;

	return (
		<div className="bg-slate-100 py-8 w-full rounded-md text-3xl font-bold text-center font-mono shadow-inner shadow-slate-200/50">
			<motion.input
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				key={currentValue}
				className="bg-transparent text-center focus:outline-none text-slate-800"
				type="text"
				readOnly="readOnly"
				value={currentValue !== 0 ? currentValue : ''}
				placeholder="0"
			/>
		</div>
	);
};

export default LargeInput;
