import { motion } from 'framer-motion';
import { bgVariants } from '../../assets/variants/Modals';

const ModalBG = ({ children }) => {
	return (
		<motion.div
			variants={bgVariants}
			initial='initial'
			animate='animate'
			exit='exit'
			className='fixed w-screen h-screen top-0 left-0 bg-slate-50/25 dark:bg-slate-900/25 backdrop-blur-2xl flex justify-center items-center p-4'
		>
			{children}
		</motion.div>
	);
};

export default ModalBG;
