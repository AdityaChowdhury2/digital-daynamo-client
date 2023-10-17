import { Helmet } from 'react-helmet-async';

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
