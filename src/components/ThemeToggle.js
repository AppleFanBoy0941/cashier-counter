import FeatherIcon from 'feather-icons-react';
import { container, sun, moon } from '../assets/variants/ThemeToggle';
import { motion } from 'framer-motion';
import { useState } from 'react';

const ThemeToggle = () => {
	// State for changing variants later in code
	const [themeToggle, setThemeToggle] = useState(
		localStorage.getItem('theme') === 'dark'
			? 'dark'
			: localStorage.getItem('theme') === 'light'
			? 'light'
			: 'auto'
	);

	// Initial theme setup on load
	if (
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) &&
			window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}

	// Checks if the user has a theme preference set
	// If not, it checks the system preference and sets theme
	const darkTheme = window.matchMedia('(prefers-color-scheme: dark)');

	darkTheme.addEventListener('change', e => {
		if (e.matches) {
			themeToggle === 'auto' && document.documentElement.classList.add('dark');
		} else {
			themeToggle === 'auto' &&
				document.documentElement.classList.remove('dark');
		}
	});

	// Toggles theme
	const toggleTheme = () => {
		if (localStorage.getItem('theme') === 'light') {
			localStorage.theme = 'dark';
			setThemeToggle('dark');
		} else if (localStorage.getItem('theme') === 'dark') {
			localStorage.removeItem('theme');
			setThemeToggle('auto');
		} else {
			localStorage.theme = 'light';
			setThemeToggle('light');
		}
	};

	// Corrects framer motion transform to rotate first
	const rayTemplate = ({ rotate, x }) => {
		return `rotate(${rotate}) translateX(${x})`;
	};

	// Array for mapping "rays" in the sun
	const raysArray = [0, 1, 2, 3, 4, 5, 6, 7];

	return (
		<motion.button
			variants={container}
			className="h-12 w-12 flex items-center justify-center rounded-full"
			animate={
				themeToggle === 'light'
					? 'light'
					: themeToggle === 'dark'
					? 'dark'
					: 'auto'
			}
			whileTap={{ scale: 0.9 }}
			onClick={toggleTheme}
		>
			<motion.div className="absolute w-6 h-6 flex items-center justify-center">
				<motion.div
					className="absolute w-4 h-4 border-4 rounded-full border-slate-600"
					variants={sun.circle}
				></motion.div>
				{raysArray.map(i => (
					<motion.span
						transformTemplate={rayTemplate}
						key={i}
						custom={i}
						className="absolute h-1 rounded-lg bg-slate-600"
						variants={sun.rays}
					></motion.span>
				))}
			</motion.div>
			<motion.div className="absolute w-6 h-6 text-slate-600" variants={moon}>
				<FeatherIcon
					icon="moon"
					strokeWidth={themeToggle === 'auto' ? '4' : '4'}
					className="w-full h-full"
				/>
			</motion.div>
		</motion.button>
	);
};

export default ThemeToggle;
