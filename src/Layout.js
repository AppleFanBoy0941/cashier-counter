import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Modal from './components/modals/Modal';
import Nav from './templates/Nav';
import { useNavigate } from 'react-router-dom';
import checkPwa from './functions/checkPwa';

const Layout = () => {
	const navigate = useNavigate();
	const isPwa = checkPwa();

	const isPwaModalDismissed = localStorage.getItem('optaellerPwaModalDismissed')
		? JSON.parse(localStorage.getItem('optaellerPwaModalDismissed'))
		: false;

	const [isPwaModalOpen, setIsPwaModalOpen] = useState(false);

	if (!isPwaModalDismissed && !isPwa) {
		setTimeout(() => {
			setIsPwaModalOpen(true);
		}, 60000);
	}

	const handlePwaModalDismiss = () => {
		localStorage.setItem('optaellerPwaModalDismissed', true);
		setIsPwaModalOpen(false);
	};

	const handlePwaModalInstall = () => {
		setIsPwaModalOpen(false);
		navigate('/install');
		localStorage.setItem('optaellerPwaModalDismissed', true);
	};

	return (
		<div className='bg-white dark:bg-slate-900 h-screen w-screen overflow-hidden'>
			<main className='pt-20'>
				<Outlet />
			</main>
			<Nav />
			<Modal
				isOpen={isPwaModalOpen}
				setIsOpen={setIsPwaModalOpen}
				title='Hent appen på din telefon'
				text='Ved at hente appen får du en bedre oplevelse og kan bruge den uden at være online.'
				actionIcon='download'
				cancelAction={handlePwaModalDismiss}
				action={handlePwaModalInstall}
			/>
		</div>
	);
};

export default Layout;
