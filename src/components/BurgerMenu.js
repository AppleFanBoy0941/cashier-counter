import { motion } from 'framer-motion';
import { spans, container } from '../assets/variants/BurgerMenu';

const BurgerMenu = ({ isOpen, setIsOpen }) => {
	return (
		<motion.button
			variants={container}
			animate={isOpen ? 'open' : 'closed'}
			className="burgermenu h-12 w-12 flex justify-center items-center flex-col"
			onClick={() => setIsOpen(!isOpen)}
		>
			<motion.div
				variants={spans.upper}
				className="h-1 w-1 bg-slate-600 dark:bg-slate-400 rounded-md"
			/>
			<motion.div
				variants={spans.middle}
				className="h-1 w-1 bg-slate-600 dark:bg-slate-400 rounded-md"
			/>
			<motion.div
				variants={spans.lower}
				className="h-1 w-1 bg-slate-600 dark:bg-slate-400 rounded-md"
			/>
		</motion.button>
	);
};

export default BurgerMenu;
