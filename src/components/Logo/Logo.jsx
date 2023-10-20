import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<Link to="/" className="flex items-center">
			<img
				src="https://i.ibb.co/2hr24MN/digidynamo-Logo.png"
				className="h-8 mr-3 flex dark:hidden"
				alt="Flowbite Logo"
			/>
			<img
				src="https://i.ibb.co/k5FMYdJ/digidynamo-Logo-Dark.png"
				className="h-8 mr-3 hidden dark:flex"
				alt="Flowbite Logo"
			/>
			<span className="self-center md:text-2xl font-semibold whitespace-nowrap text-zinc-800 dark:text-zinc-300">
				Digital Dynamo
			</span>
		</Link>
	);
};

export default Logo;
