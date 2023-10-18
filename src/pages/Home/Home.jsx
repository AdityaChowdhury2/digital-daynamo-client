import { Helmet } from 'react-helmet-async';
import Brands from '../../components/Brands/Brands';
import HomeBanner from '../../components/Banner/HomeBanner';

const Home = () => {
	return (
		<div>
			<Helmet>
				<title>Digital Dynamo | Home</title>
			</Helmet>
			<HomeBanner />
			<Brands />
		</div>
	);
};

export default Home;
