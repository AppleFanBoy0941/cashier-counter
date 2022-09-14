const spans = {
	upper: {
		open: {
			rotate: 45,
			y: 4,
			marginBottom: 0,
			width: 24,
			transition: {
				delay: 0.05,
			},
		},
		closed: {
			rotate: 0,
			y: 0,
			marginBottom: 4,
			width: 4,
		},
	},
	middle: {
		open: {
			opacity: 0,
			width: 4,
		},
		closed: {
			opacity: 1,
			width: 4,
			transition: {
				delay: 0.15,
			},
		},
	},
	lower: {
		open: {
			rotate: -45,
			y: -4,
			marginTop: 0,
			width: 24,
			transition: {
				delay: 0.05,
			},
		},
		closed: {
			rotate: 0,
			y: 0,
			marginTop: 4,
			width: 4,
		},
	},
};

const container = {
	open: {},
	closed: {},
};

export { spans, container };
