import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import FeatherIcon from 'feather-icons-react';

const ListView = ({ isOpen, setIsOpen }) => {
	const [fullScreen, setFullScreen] = useState(false);
	const listVariants = {
		hidden: {
			opacity: 0,
			y: '100%',
		},
		visible: {
			opacity: 1,
			y: fullScreen ? '0%' : '40%',
			height: fullScreen
				? [null, 'calc(100% - 128px)']
				: [null, 'calc(100% - 128px)'],
			transition: {
				ease: 'easeInOut',
				duration: 0.75,
			},
		},
		exit: {
			opacity: 0,
			y: '100%',
			transition: { duration: 0.3, ease: 'easeIn' },
		},
	};

	const checkIfClickedOutside = e => {
		if (e.target.classList.contains('list-view-bg')) {
			setIsOpen(false);
		}
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className='list-view-bg fixed top-0 left-0 w-full h-full bg-slate-900/25 dark:bg-slate-900/25 z-10 backdrop-blur-md flex flex-col justify-end'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={e => checkIfClickedOutside(e)}
				>
					<motion.div
						variants={listVariants}
						initial='hidden'
						animate='visible'
						exit='exit'
						className='bg-slate-50 dark:bg-slate-900/50 backdrop-blur-md rounded-t-3xl p-4 flex flex-col w-full shadow-xl shadow-slate-400/25 min-h-[50vh] border border-slate-100 relative'
					>
						<div className='flex justify-between items-center'>
							<motion.h1 className='text-2xl font-bold text-slate-800'>
								Overblik
							</motion.h1>
							<div>
								<motion.button
									onClick={() => setFullScreen(!fullScreen)}
									className='bg-slate-50 dark:bg-slate-900/50 backdrop-blur-md rounded-full p-3 shadow-xl shadow-slate-300/20 border border-slate-100'
									animate={{ scale: 1 }}
									whileTap={{ scale: 0.9 }}
								>
									<motion.div animate={{ rotate: fullScreen ? 90 : 0 }}>
										{fullScreen ? (
											<FeatherIcon icon='minimize' />
										) : (
											<FeatherIcon icon='maximize' />
										)}
									</motion.div>
								</motion.button>
								<motion.button
									onClick={() => setIsOpen(false)}
									className='rounded-full p-3'
									animate={{ scale: 1 }}
									whileTap={{ scale: 0.9 }}
								>
									<FeatherIcon
										icon='chevron-down'
										className='pointer-events-none'
									/>
								</motion.button>
							</div>
						</div>
						<motion.ul></motion.ul>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ListView;
