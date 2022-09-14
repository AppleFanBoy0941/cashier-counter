import { Outlet } from 'react-router-dom';
import Nav from './templates/Nav';

const Layout = () => {
	return (
		<div className="bg-white dark:bg-slate-900 min-h-screen">
			<main className="pt-20">
				<Outlet />
			</main>
			<Nav />
		</div>
	);
};

export default Layout;
