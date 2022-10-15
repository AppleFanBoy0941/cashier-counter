import { motion } from 'framer-motion';

const AnimatedSection = ({ children, className }) => {
	return (
		<motion.section
			variants={{
				initial: {
					opacity: 1,
				},
				animate: {
					opacity: 1,
					transition: {
						staggerChildren: 0.1,
					},
				},
			}}
			initial='initial'
			animate='animate'
			className={className}
		>
			{children}
		</motion.section>
	);
};

export default AnimatedSection;
