import DeleteKey from '../components/DeleteKey';
import LargeInput from '../components/LargeInput';
import { motion } from 'framer-motion';
import FeatherIcon from 'feather-icons-react';

const Counter = ({ multiplier }) => {
	const { currentMultiplier } = multiplier;

	return (
		<div className="flex flex-col w-screen p-4">
			<div className="flex justify-between items-end px-1">
				<div className="flex gap-2 items-center mb-1">
					<motion.div
						key={currentMultiplier.type}
						initial={{ opacity: 0, filter: 'blur(2px)', scale: 0.8 }}
						animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
						className="text-slate-600"
					>
						<FeatherIcon
							icon={
								currentMultiplier.type === 'sedler'
									? 'map'
									: currentMultiplier.type === 'mønter'
									? 'circle'
									: 'database'
							}
							size="16"
						/>
					</motion.div>
					<motion.p
						key={currentMultiplier.id}
						className="font-medium text-slate-600"
						initial={{ x: 40 }}
						animate={{ x: 0 }}
					>
						{currentMultiplier.value} x
					</motion.p>
				</div>
				<motion.p
					key={currentMultiplier.type}
					initial={{ opacity: 0, filter: 'blur(2px)', scale: 0.8 }}
					animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
					className="text-sm text-slate-400"
				>
					{currentMultiplier.type}
				</motion.p>
			</div>
			<div className="relative">
				<LargeInput id={currentMultiplier.id} />
				<DeleteKey id={currentMultiplier.id} />
			</div>
		</div>
	);
};

export default Counter;
