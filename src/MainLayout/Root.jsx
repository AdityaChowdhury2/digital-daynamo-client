import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Root = () => {
	return (
		<div className="bg-gray-100 text-zinc-800 dark:bg-gray-700 dark:text-zinc-300">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Root;
