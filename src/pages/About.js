import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
	const variants = {
		initial: {
			opacity: 0,
			y: 20,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				type: 'spring',
				stiffness: 300,
				damping: 15,
			},
		},
	};
	return (
		<AnimatedSection className='px-4 pt-6'>
			<motion.h1
				variants={variants}
				className='text-2xl font-bold text-slate-700 dark:text-slate-300 mb-3'
			>
				Om "os"
			</motion.h1>
			<motion.p variants={variants} className='text-slate-500 font-medium mb-4'>
				Velkommen til Optæller! (Nej det er ikke særligt opfindsomt, I know).
				Optæller er en lille app jeg har lavet for at gøre det nemmere for
				kassemedarbejdere at optælle penge.
			</motion.p>
			<motion.h2
				variants={variants}
				className='text-lg font-bold text-slate-700 dark:text-slate-300 mt-6 mb-2'
			>
				Lidt om mig
			</motion.h2>
			<motion.p variants={variants} className='text-slate-500 font-medium mb-4'>
				Jeg er Sebastian, jeg er studerende som webudvikler, jeg har i over 3 år
				arbejdet i kassen i den lokale SuperBrugsen. Jeg tror enhver
				kassemedarbejder vil give mig ret i at det mest kedelige ved at være
				kassemedarbejder er at optælle penge. Derfor har jeg lavet denne app,
				det gør det ikke sjovere at tælle penge op, men det er nok overstået
				lidt hurtigere.
			</motion.p>
			<motion.p variants={variants} className='text-slate-500 font-medium mb-4'>
				Jeg håber du vil få lige så meget gavn af den som jeg har haft. Hvis du
				har nogle forslag til nye funktioner eller oplever du fejl, så hop over
				til{' '}
				<Link
					to='/contact'
					className='text-slate-600 dark:text-slate-400 font-semibold inline-block px-3 mx-1 bg-slate-100 dark:bg-slate-800 rounded-full'
				>
					kontakt
				</Link>{' '}
				så vil jeg kigge på det hurtigst muligt.
			</motion.p>
			<motion.p variants={variants} className='text-slate-500 font-medium mb-4'>
				Optæller er lavet med React og TailwindCSS, og ligger som open source på{' '}
				<a
					href='https://github.com/AppleFanBoy0941/cashier-counter'
					className='text-slate-600 dark:text-slate-400 font-semibold inline-block px-3 mx-1 bg-slate-100 dark:bg-slate-800 rounded-full'
				>
					GitHub
				</a>
				.
			</motion.p>
		</AnimatedSection>
	);
};

export default About;
