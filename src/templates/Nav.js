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
		},
		{
			text: 'Om os',
			href: '/about',
		},
		{
			text: 'Kontakt',
			href: '/contact',
		},
	];

	return (
		<nav className="fixed top-0 w-screen p-4 flex justify-between items-center shadow-xl shadow-slate-400/10 dark:shadow-none dark:border-b dark:border-b-slate-800">
			<h1 className="text-xl font-bold text-slate-600 dark:text-slate-400">
				Optæller
			</h1>
			<div className="flex">
				<ThemeToggle />
				<BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
				<ContextualMenu isOpen={isOpen} setIsOpen={setIsOpen} links={links} />
			</div>
		</nav>
	);
};

export default Nav;
