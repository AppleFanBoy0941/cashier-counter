import BurgerMenu from '../components/BurgerMenu';
import ThemeToggle from '../components/ThemeToggle';
import { useState } from 'react';
import ContextualMenu from './ContextualMenu';

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const links = [
		{
			text: 'Hjem',
			href: '/',
			icon: 'home',
		},
		{
			text: 'Om os',
			href: '/about',
			icon: 'info',
		},
		{
			text: 'Kontakt',
			href: '/contact',
			icon: 'mail',
		},
		{
			text: 'Installer Optæller',
			href: '/install',
			icon: 'download',
			onlyWeb: true,
		},
	];

	return (
		<nav className='fixed top-0 w-screen p-4 flex justify-between items-center bg-white/25 dark:bg-slate-900/25 shadow-xl shadow-slate-400/10 dark:shadow-none dark:border-b dark:border-b-slate-800 backdrop-blur-md'>
			<h1 className='text-xl font-bold text-slate-600 dark:text-slate-400'>
				Optæller
			</h1>
			<div className='flex'>
				<ThemeToggle />
				<BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
				<ContextualMenu isOpen={isOpen} setIsOpen={setIsOpen} links={links} />
			</div>
		</nav>
	);
};

export default Nav;
