import FeatherIcon from 'feather-icons-react';
import { motion, AnimatePresence } from 'framer-motion';
import useCalculations from '../hooks/useCalculations';

const Statusbar = ({ multiplier }) => {
	const { values, calculateTotal, resetValues } = useCalculations();
	const { multipliers, currentMultiplier, setCurrentMultiplier } = multiplier;
	const currentMultiplierIndex = multipliers.findIndex(
		multiplier => multiplier.id === currentMultiplier.id
	);

	const currentValue = values.find(
		item => item.id === currentMultiplier.id
	).value;

	const total = calculateTotal();

	return (
		<div className="flex justify-between px-4 py-2 gap-4">
			<div className="flex items-center gap-2">
				<button
					className="p-2 bg-slate-50 rounded-full border border-slate-200 w-12 h-12 flex items-center justify-center"
					onClick={() => {
						if (currentMultiplierIndex === 0) return;
						setCurrentMultiplier(multipliers[currentMultiplierIndex - 1]);
					}}
				>
					<FeatherIcon icon="chevron-left" className="-ml-1" />
				</button>
				<button
					className="p-2 bg-slate-50 rounded-full border border-slate-200 w-12 h-12 flex items-center justify-center"
					onClick={() => {
						if (currentMultiplierIndex === multipliers.length - 1) return;
						setCurrentMultiplier(multipliers[currentMultiplierIndex + 1]);
					}}
				>
					<FeatherIcon icon="chevron-right" className="-mr-1" />
				</button>
			</div>
			<div className="h-12 flex justify-between items-center p-2 pr-4 bg-slate-50 w-full rounded-md border border-slate-100">
				<AnimatePresence>
					{total !== 0 && (
						<motion.button
							initial={{
								opacity: 0,
								scale: 0.9,
								filter: 'blur(2px)',
							}}
							animate={{
								opacity: 1,
								scale: 1,
								filter: 'blur(0px)',
								transition: {
									delay: 0.5,
									duration: 0.3,
								},
							}}
							exit={{
								opacity: 0,
								scale: 0.9,
								filter: 'blur(2px)',
								transition: {
									delay: 0.15,
									duration: 0.3,
								},
							}}
							className="p-2 rounded-full"
							onClick={() => {
								resetValues();
								setCurrentMultiplier(multipliers[0]);
							}}
						>
							<FeatherIcon icon="trash-2" className="text-slate-400 h-4 w-4" />
						</motion.button>
					)}
				</AnimatePresence>
				<p className="font-mono text-slate-600 ml-auto">
					{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
				</p>
			</div>
		</div>
	);
};

export default Statusbar;
