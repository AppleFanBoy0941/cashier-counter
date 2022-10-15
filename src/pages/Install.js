import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';
import FeatherIcon from 'feather-icons-react';

const Install = () => {
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
				Sådan installerer du Optæller
			</motion.h1>
			<motion.p variants={variants} className='text-slate-500 font-medium mb-4'>
				Optæller er en PWA (Progressive Web App), det betyder at du kan
				installere den på din telefon eller tablet. Det er ikke nødvendigt at
				installere den, det er bare en mulighed.
			</motion.p>
			<motion.p variants={variants} className='text-slate-500 font-medium mb-4'>
				Fordelene ved at installere Optæller er at den vil være tilgængelig
				offline og du kan tilføje den til din hjemmeskærm.
			</motion.p>
			<motion.h2
				variants={variants}
				className='text-lg font-bold text-slate-700 dark:text-slate-300 mt-6 mb-2'
			>
				Installér på iOS
			</motion.h2>
			<motion.p
				variants={variants}
				className='text-slate-500 font-medium mb-4 '
			>
				For at hente Optæller på din iPhone skal du først trykke på{' '}
				<FeatherIcon icon='share' className='inline ml-1 h-6 w-6 -mt-1' />
				-knappen i Safari. Herefter skal du trykke på "Tilføj til hjemmeskærm".
			</motion.p>
			<motion.p variants={variants} className='text-slate-500 font-medium mb-4'>
				Der vil komme en pop-up hvor du skal trykke på "Tilføj". Optæller vil nu
				være tilgængelig på din hjemmeskærm.
			</motion.p>
			<motion.h2
				variants={variants}
				className='text-lg font-bold text-slate-700 dark:text-slate-300 mt-6 mb-2'
			>
				Installér på Android
			</motion.h2>
			<motion.p variants={variants} className='text-slate-500 font-medium mb-4'>
				Appen er ikke testet på Android endnu, hvis du selv ved hvordan det
				virker, så er det helt perfekt. Senere vil der komme en guide til
				Android-brugere.
			</motion.p>
		</AnimatedSection>
	);
};

export default Install;
