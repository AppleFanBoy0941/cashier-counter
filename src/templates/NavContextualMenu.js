import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { menu, linkVariant } from '../assets/variants/ContextualMenu';
import FeatherIcon from 'feather-icons-react';
import checkPwa from '../functions/checkPwa';

const NavContextualMenu = ({ side, links, isOpen, setIsOpen }) => {
	isOpen &&
		document.documentElement.addEventListener('click', e => {
			if (
				!e.target.classList.contains('contextualmenu') &&
				!e.target.classList.contains('burgermenu')
			) {
				setIsOpen(false);
			}
		});

	const isPwa = checkPwa();

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.ul
					variants={menu}
					initial='closedRight'
					animate='open'
					exit='exit'
					className={`contextmenu flex flex-col p-1 absolute top-full mt-4 mx-4 w-2/3 bg-slate-50 dark:bg-slate-800 rounded-md shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 ${
						side === 'left' ? 'left-0' : 'right-0'
					} z-50`}
				>
					{links?.map((link, index) =>
						link.onlyWeb && isPwa ? null : (
							<motion.li
								variants={linkVariant}
								key={index}
								className='text-slate-600 dark:text-slate-200 font-medium text-sm'
							>
								<NavLink
									end
									to={link.href}
									className={({ isActive }) => {
										return `flex items-center p-4 pl-3 rounded-sm gap-3 ${
											isActive && 'bg-slate-100 dark:bg-slate-700'
										}`;
									}}
									onClick={() => setIsOpen(false)}
								>
									{link.icon ? (
										<FeatherIcon
											icon={link.icon}
											className='h-5 w-5 opacity-75'
										/>
									) : (
										<div className='w-5 h-5'></div>
									)}
									{link.text}
								</NavLink>
							</motion.li>
						)
					)}
					{!links && (
						<motion.li
							variants={linkVariant}
							className='text-slate-600 dark:text-slate-200 font-medium text-sm p-3'
						>
							There's no links
						</motion.li>
					)}
				</motion.ul>
			)}
		</AnimatePresence>
	);
};

export default NavContextualMenu;
