const menu = {
	open: {
		scale: 1,
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			staggerChildren: 0.05,
			delayChildren: 0.2,
			duration: 0.15,
			type: 'spring',
			damping: 20,
			stiffness: 300,
		},
	},
	closedLeft: {
		scale: 0.5,
		x: -64,
		y: -16,
		opacity: 0,
	},
	closedRight: {
		scale: 0.5,
		x: 64,
		y: -16,
		opacity: 0,
	},

	exit: {
		scale: 0.5,
		x: 0,
		y: 40,
		opacity: 0,
		transition: {
			duration: 0.2,
			ease: 'easeIn',
		},
	},
};

const linkVariant = {
	open: {
		opacity: 1,
		y: 0,
	},
	closed: {
		opacity: 0,
		y: 16,
	},
};

export { menu, linkVariant };
