import FeatherIcon from 'feather-icons-react';
import { motion, AnimatePresence } from 'framer-motion';
import useCalculations from '../hooks/useCalculations';
import { useState, useContext } from 'react';
import { ValuesContext } from '../contexts/values';

const Statusbar = ({ multiplier }) => {
	const { calculateTotal, resetValues } = useCalculations();
	const { multipliers, currentMultiplier, setCurrentMultiplier } = multiplier;
	const currentMultiplierIndex = multipliers.findIndex(
		multiplier => multiplier.id === currentMultiplier.id
	);

	const { values } = useContext(ValuesContext);

	const [showCurrentTotal, setShowCurrentTotal] = useState(false);

	const currentValue = values[currentMultiplierIndex].value;

	const currentTotal = currentValue * currentMultiplier.value;
	console.log('er her', currentTotal);

	const total = calculateTotal();

	return (
		<div className='flex justify-between px-4 py-2 gap-4'>
			<div className='flex items-center gap-2'>
				<motion.button
					initial={{ scale: 0.8 }}
					animate={{ scale: 1 }}
					whileTap={{ scale: 0.75 }}
					transition={{ type: 'spring', stiffness: 200 }}
					className='p-2 bg-slate-50 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 w-12 h-12 flex items-center justify-center text-slate-600 dark:text-slate-300'
					onClick={() => {
						if (currentMultiplierIndex === 0) return;
						setCurrentMultiplier(multipliers[currentMultiplierIndex - 1]);
					}}
				>
					<FeatherIcon icon='chevron-left' className='-ml-1' />
				</motion.button>
				<motion.button
					initial={{ scale: 0.8 }}
					animate={{ scale: 1 }}
					whileTap={{ scale: 0.75 }}
					transition={{ type: 'spring', stiffness: 200 }}
					className='p-2 bg-slate-50 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 w-12 h-12 flex items-center justify-center text-slate-600 dark:text-slate-300'
					onClick={() => {
						if (currentMultiplierIndex === multipliers.length - 1) return;
						setCurrentMultiplier(multipliers[currentMultiplierIndex + 1]);
					}}
				>
					<FeatherIcon icon='chevron-right' className='-mr-1' />
				</motion.button>
			</div>
			<div
				className='h-12 flex justify-between items-center p-2 pr-4 bg-slate-50 dark:bg-slate-800 w-full rounded-md border border-slate-100 dark:border-slate-700'
				// onClick={e => {
				// 	e.stopPropagation();
				// 	setShowCurrentTotal(!showCurrentTotal);
				// }}
			>
				<AnimatePresence>
					{total !== 0 && !showCurrentTotal ? (
						<motion.button
							key='reset'
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
									delay: 0.4,
									duration: 0.3,
								},
							}}
							exit={{
								opacity: 0,
								scale: 0.9,
								filter: 'blur(2px)',
								transition: {
									delay: 0.15,
									duration: 0.15,
								},
							}}
							className='p-2 rounded-full'
							onClick={() => {
								resetValues();
								setCurrentMultiplier(multipliers[0]);
								setShowCurrentTotal(false);
							}}
						>
							<FeatherIcon icon='trash-2' className='text-slate-400 h-4 w-4' />
						</motion.button>
					) : showCurrentTotal ? (
						<motion.button
							key='currentTotal'
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
									delay: 0.4,
									duration: 0.3,
								},
							}}
							exit={{
								opacity: 0,
								scale: 0.9,
								filter: 'blur(2px)',
								transition: {
									delay: 0.15,
									duration: 0.15,
								},
							}}
							className='p-2 rounded-full'
							onClick={() => {
								setShowCurrentTotal(false);
							}}
						>
							<FeatherIcon
								icon='chevron-left'
								className='text-slate-400 h-4 w-4'
							/>
						</motion.button>
					) : null}
				</AnimatePresence>
				<motion.p
					key={showCurrentTotal ? currentTotal : total}
					initial={{ opacity: 0, x: 16 }}
					animate={{
						opacity: 1,
						x: 0,
						transition: { duration: 0.3 },
					}}
					className={`font-mono ${
						showCurrentTotal
							? 'text-slate-400 dark:text-slate-600'
							: 'text-slate-600 dark:text-slate-300'
					} ml-auto w-full text-end`}
					onClick={() => {
						setShowCurrentTotal(!showCurrentTotal);
					}}
				>
					{showCurrentTotal
						? currentTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
						: total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
					{/* {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} */}
				</motion.p>
			</div>
		</div>
	);
};

export default Statusbar;
