import { motion } from 'framer-motion';
import useCalculations from '../hooks/useCalculations';

const Key = ({ item, currentMultiplier }) => {
	const { values, setNewValue } = useCalculations();

	const currentValue = values.find(
		item => item.id === currentMultiplier.id
	).value;

	return (
		<button
			className={`w-full h-full bg-slate-300 rounded-md ${
				item.span === 2 && 'col-span-2'
			}`}
			onClick={() => {
				if (currentValue === '' && item.value === '0') return;
				// setValue(value + item.value);
				setNewValue(currentMultiplier.id, `${currentValue}${item.value}`);
			}}
		>
			<motion.div
				className="w-full h-full p-4 bg-slate-200 rounded-md border border-slate-300 flex items-center justify-center text-slate-600 font-medium"
				animate={{ y: -4 }}
				whileTap={{ y: -2 }}
			>
				{item.value}
			</motion.div>
		</button>
	);
};

export default Key;
