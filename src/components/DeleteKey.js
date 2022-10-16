import FeatherIcon from 'feather-icons-react';
import { motion, AnimatePresence } from 'framer-motion';
import useCalculations from '../hooks/useCalculations';

const DeleteKey = ({ id }) => {
	const { values, setNewValue } = useCalculations();
	const currentValue = values.find(item => item.id === id).value;

	return (
		<AnimatePresence>
			{currentValue !== '' && (
				<motion.button
					initial={{
						opacity: 0,
						scale: 0.9,
						translateY: '-50%',
						filter: 'blur(2px)',
					}}
					animate={{
						opacity: 1,
						scale: 1,
						translateY: '-50%',
						filter: 'blur(0px)',
						transition: {
							delay: 0.05,
							duration: 0.2,
						},
					}}
					exit={{
						opacity: 0,
						scale: 0.9,
						translateY: '-50%',
						filter: 'blur(2px)',
						transition: {
							delay: 0.15,
							duration: 0.3,
						},
					}}
					whileTap={{
						scale: 0.95,
						transition: {
							duration: 0.1,
						},
					}}
					transition={{
						duration: 3,
					}}
					className='absolute top-1/2 -translate-y-1/2 right-2 rounded-full p-2 text-slate-400'
					onClick={() => {
						setNewValue(id, currentValue.slice(0, -1));
					}}
				>
					<FeatherIcon icon='delete' />
				</motion.button>
			)}
		</AnimatePresence>
	);
};

export default DeleteKey;
