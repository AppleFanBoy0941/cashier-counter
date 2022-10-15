import { AnimatePresence, motion } from 'framer-motion';
import ModalBG from './ModalBG';
import { modalVariants } from '../../assets/variants/Modals';
import FeatherIcon from 'feather-icons-react';

const Modal = ({
	isOpen,
	setIsOpen,
	title,
	text,
	action,
	actionLabel,
	actionIcon,
	cancelLabel,
	cancelAction,
}) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<ModalBG>
					<motion.div
						variants={modalVariants}
						initial='initial'
						animate='animate'
						exit='exit'
						className='bg-slate-50 dark:bg-slate-900 border border-slate-200  dark:border-slate-800 rounded-lg shadow-2xl shadow-slate-900/10 overflow-hidden'
					>
						<div className='p-4'>
							<h2 className='text-xl font-bold mb-1 text-slate-700 dark:text-slate-300'>
								{title}
							</h2>
							<p className='text-sm text-slate-500 dark:text-slate-400'>
								{text}
							</p>
						</div>
						<div className='flex w-full bg-slate-100 dark:bg-slate-800 px-4 py-4 justify-end gap-2'>
							<button
								className='bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 py-2 px-6 rounded-md text-slate-600 dark:text-slate-400 font-medium'
								onClick={cancelAction ? cancelAction : () => setIsOpen(false)}
							>
								{cancelLabel || 'Annuller'}
							</button>
							<button
								className='bg-slate-500 border border-slate-700/50 text-slate-50 font-medium px-6 py-2 rounded-md flex items-center gap-2'
								onClick={action}
							>
								{actionLabel || 'Fortsæt'}
								{actionIcon && (
									<FeatherIcon
										icon={actionIcon}
										className='opacity-75 h-5 w-5 -mr-2'
									/>
								)}
							</button>
						</div>
					</motion.div>
				</ModalBG>
			)}
		</AnimatePresence>
	);
};

export default Modal;
