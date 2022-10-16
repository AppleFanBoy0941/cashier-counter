import { motion, AnimatePresence } from 'framer-motion';
import { menu, linkVariant } from '../assets/variants/ContextualMenu';
import FeatherIcon from 'feather-icons-react';
import { useEffect, useRef } from 'react';

const ContextualMenu = props => {
	const { isOpen, setIsOpen, items, side, avoidClassnames, highLight, offset } =
		props;

	// check if avoidClassnames is an array or a string
	const avoidClassnamesArray = Array.isArray(avoidClassnames);

	isOpen &&
		document.documentElement.addEventListener('click', e => {
			console.log(e.target);
			if (
				!e.target.classList.contains('contextualmenu') &&
				!e.target.classList.contains(
					avoidClassnamesArray ? avoidClassnamesArray : [avoidClassnamesArray]
				)
			) {
				setIsOpen(false);
			}
		});

	const menuRef = useRef(null);
	const highlightRef = useRef(null);

	const executeScroll = () =>
		highlightRef?.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
		});

	useEffect(() => {
		executeScroll();
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.ul
					variants={menu}
					initial='closedLeft'
					animate='open'
					exit='exit'
					className={`contextmenu flex flex-col p-1 absolute top-full mt-4 ${
						offset === 'lg'
							? 'mx-4'
							: offset === 'md'
							? 'mx-2'
							: offset === 'sm'
							? 'mx-1'
							: 'mx-0'
					} w-[66vw] bg-slate-50 dark:bg-slate-800 rounded-md shadow-xl shadow-slate-400/25 dark:shadow-none border border-slate-100 dark:border-slate-700 ${
						side === 'left' ? 'left-0' : 'right-0'
					} z-[1000] max-h-[40vh] overflow-y-auto hide-scrollbar`}
					ref={menuRef}
				>
					{items?.map((item, index) => (
						<motion.li
							variants={linkVariant}
							key={index}
							className={`text-slate-600 dark:text-slate-200 font-medium text-sm p-4 pl-3 flex items-center justify-between gap-3 rounded-sm ${
								item.id === highLight &&
								'bg-slate-100 dark:bg-slate-700 highlight'
							}`}
							onClick={item.onClick && item.onClick}
							ref={item.id === highLight ? highlightRef : null}
						>
							<FeatherIcon
								icon={
									item.type === 'mønter'
										? 'circle'
										: item.type === 'bundter'
										? 'database'
										: 'map'
								}
								className='text-slate-400 dark:text-slate-400 h-4 w-4'
							/>
							<div className='flex flex-col items-end'>
								<p className='font-semibold'>{item.value}</p>
								<p className='text-xs font-normal text-slate-400'>
									{item.type}
								</p>
							</div>
						</motion.li>
					))}
				</motion.ul>
			)}
		</AnimatePresence>
	);
};

export default ContextualMenu;
