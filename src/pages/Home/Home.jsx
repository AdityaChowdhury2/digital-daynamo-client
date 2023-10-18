import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const Home = () => {
	return (
		<div className="container">
			<Helmet>
				<title>Digital Dynamo | Home</title>
			</Helmet>
			<h1>This is home page</h1>
		</div>
	);
};

export default Home;
