import { motion } from 'framer-motion';
import { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import ContextualMenu from './ContextualMenu';

const MultiplierDropDown = ({ multiplier }) => {
	const [isOpen, setIsOpen] = useState(false);
	const { currentMultiplier, multipliers, setCurrentMultiplier } = multiplier;
	const contextualMenuItems = multipliers.map(thisMultiplier => {
		return {
			...thisMultiplier,
			onClick: () => {
				setCurrentMultiplier(thisMultiplier);
				setIsOpen(false);
			},
		};
	});
	return (
		<div className='relative'>
			<motion.div
				layout
				className='contextualmenu flex gap-2 items-center mb-1 relative py-1 px-2 rounded-md border border-slate-100 bg-slate-50 overflow-hidden'
				onClick={() => setIsOpen(!isOpen)}
			>
				<motion.div
					key={currentMultiplier.type}
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					className='text-slate-600 pointer-events-none'
				>
					<FeatherIcon
						icon={
							currentMultiplier.type === 'sedler'
								? 'map'
								: currentMultiplier.type === 'mønter'
								? 'circle'
								: 'database'
						}
						size='16'
					/>
				</motion.div>
				<div className='w-px h-6 bg-slate-200 rounded-full pointer-events-none'></div>
				<motion.p
					key={currentMultiplier.id}
					className='font-medium text-slate-600 pointer-events-none'
					initial={{ x: 40 }}
					animate={{ x: 0 }}
				>
					{currentMultiplier.value} x
				</motion.p>
				<motion.div
					animate={{ rotate: isOpen ? 180 : 0 }}
					className='pointer-events-none'
				>
					<FeatherIcon
						icon='chevron-down'
						size='16'
						className='text-slate-400 pointer-events-none'
					/>
				</motion.div>
			</motion.div>
			<ContextualMenu
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				items={contextualMenuItems}
				setCurrentMultiplier={setCurrentMultiplier}
				side='left'
				highLight={currentMultiplier.id}
			/>
		</div>
	);
};

export default MultiplierDropDown;
