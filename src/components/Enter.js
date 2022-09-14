import { motion } from 'framer-motion';
import FeatherIcon from 'feather-icons-react';

const Enter = ({ value, multiplier }) => {
	const { multipliers, currentMultiplier, setCurrentMultiplier } = multiplier;
	const currentMultiplierIndex = multipliers.findIndex(
		multiplier => multiplier.id === currentMultiplier.id
	);
	return (
		<button
			className={`w-full h-full bg-slate-500 rounded-md`}
			onClick={() => {
				if (value === '') return;
				setCurrentMultiplier(
					currentMultiplierIndex === multipliers.length - 1
						? multipliers[0]
						: multipliers[currentMultiplierIndex + 1]
				);
			}}
		>
			<motion.div
				className="w-full h-full p-4 bg-slate-400 rounded-md border border-slate-500 flex items-center justify-center text-slate-50"
				animate={{ y: -4 }}
				whileTap={{ y: -2 }}
			>
				<FeatherIcon icon="arrow-right" />
			</motion.div>
		</button>
	);
};

export default Enter;
