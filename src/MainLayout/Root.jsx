import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Root = () => {
	const location = useLocation();
	console.log(location);
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Root;
