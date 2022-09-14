import DeleteKey from '../components/DeleteKey';
import LargeInput from '../components/LargeInput';
import { motion } from 'framer-motion';

const Counter = ({ multiplier }) => {
	const { currentMultiplier } = multiplier;

	return (
		<div className="flex flex-col w-screen p-4">
			<div className="flex justify-between items-end px-1">
				<motion.p
					key={currentMultiplier.id}
					className="font-medium text-slate-600 mb-1"
					initial={{ x: 40 }}
					animate={{ x: 0 }}
				>
					{currentMultiplier.value} x
				</motion.p>
				<p className="text-sm text-slate-400">{currentMultiplier.type}</p>
			</div>
			<div className="relative">
				<LargeInput id={currentMultiplier.id} />
				<DeleteKey id={currentMultiplier.id} />
			</div>
		</div>
	);
};

export default Counter;
