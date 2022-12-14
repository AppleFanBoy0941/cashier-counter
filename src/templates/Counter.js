import DeleteKey from '../components/DeleteKey'
import LargeInput from '../components/LargeInput'
import { motion } from 'framer-motion'
import MultiplierDropDown from './MultiplierDropDown'

const Counter = ({ multiplier }) => {
	const { currentMultiplier } = multiplier

	return (
		<div className='flex flex-col w-screen p-4'>
			<div className='flex justify-between items-end pr-1'>
				<MultiplierDropDown multiplier={multiplier} />
				<motion.p
					key={currentMultiplier.type}
					initial={{ opacity: 0, filter: 'blur(2px)', scale: 0.8 }}
					animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
					className='text-sm text-slate-400'
				>
					{currentMultiplier.type}
				</motion.p>
			</div>
			<div className='relative flex items-center justify-evenly bg-slate-50 dark:bg-slate-800 w-full rounded-md text-3xl font-bold text-center font-mono border border-slate-100 dark:border-slate-700'>
				<div className='w-12 h-12'></div>
				<LargeInput id={currentMultiplier.id} />
				<DeleteKey id={currentMultiplier.id} />
			</div>
		</div>
	)
}

export default Counter
