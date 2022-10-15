const checkPwa = () => {
	const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
	if (document.referrer.startsWith('android-app://')) {
		return true;
	} else if (navigator.standalone || isStandalone) {
		return true;
	}
	return false;
};

export default checkPwa;
