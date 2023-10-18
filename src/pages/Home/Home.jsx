import { Helmet } from 'react-helmet-async';
import Banner from '../../components/Banner/Banner';

const Home = () => {
	return (
		<div className="container">
			<Helmet>
				<title>Digital Dynamo | Home</title>
			</Helmet>
			<Banner />
		</div>
	);
};

export default Home;
