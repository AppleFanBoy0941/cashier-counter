const bgVariants = {
	initial: { opacity: 0 },
	animate: { opacity: 1, transition: { duration: 0.5 } },
	exit: { opacity: 0, transition: { duration: 0.5 } },
};

const modalVariants = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.2 } },
	exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
};

export { bgVariants, modalVariants };
