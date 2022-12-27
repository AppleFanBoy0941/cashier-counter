import Keypad from '../templates/Keypad';
import Counter from '../templates/Counter';
import Statusbar from '../templates/Statusbar';
import multipliers from '../assets/multipliers';
import { useState, useContext } from 'react';
import ListView from '../templates/ListView';
import FeatherIcon from 'feather-icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import { ValuesContext } from '../contexts/values';

const Home = () => {
	const [totalValue, setTotalValue] = useState(0);
	const [currentMultiplier, setCurrentMultiplier] = useState(multipliers[0]);
	const [listIsOpen, setListIsOpen] = useState(false);

	const { values } = useContext(ValuesContext);

	// check if any of the values in values isnt '' or 0
	const isAnyValue = values.some(
		value => value.value !== '' && value.value !== 0
	);

	return (
		<div className='relative'>
			<AnimatePresence>
				{isAnyValue && (
					<motion.button
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{
							opacity: 1,
							scale: 1,
							y: 0,
							transition: {
								type: 'spring',
								stiffness: 300,
								damping: 15,
							},
						}}
						exit={{
							opacity: 0,
							scale: 0.5,
							y: -20,
							transition: { duration: 0.3, ease: 'easeIn' },
						}}
						className='absolute right-4 top-4 h-12 w-12 bg-slate-50 border border-slate-100 dark:bg-slate-800/50 dark:border-slate-700 flex items-center justify-center rounded-md text-slate-600 dark:text-slate-400'
						onClick={() => setListIsOpen(true)}
					>
						<FeatherIcon icon='list' />
					</motion.button>
				)}
			</AnimatePresence>
			<div className='fixed bottom-0 z-0'>
				<Counter
					// value={value}
					// setValue={setValue}
					multiplier={{
						multipliers,
						currentMultiplier,
						setCurrentMultiplier,
					}}
				/>
				<Statusbar
					totalValue={totalValue}
					setTotalValue={setTotalValue}
					multiplier={{
						multipliers,
						currentMultiplier,
						setCurrentMultiplier,
					}}
				/>
				<Keypad
					// setValue={setValue}
					// value={value}
					totalValue={totalValue}
					setTotalValue={setTotalValue}
					multiplier={{
						multipliers,
						currentMultiplier,
						setCurrentMultiplier,
					}}
				/>
				<ListView isOpen={listIsOpen} setIsOpen={setListIsOpen} />
			</div>
		</div>
	);
};

export default Home;
