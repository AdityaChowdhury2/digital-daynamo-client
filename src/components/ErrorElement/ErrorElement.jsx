import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const ErrorElement = () => {
	return (
		<>
			<Header />
			<div className="container grid grid-cols-1 md:grid-cols-2 items-center md:h-screen h-[80vh] gap-4 px-2">
				<div>
					<img
						src="https://i.ibb.co/TTPn8cm/Yellow-Blue-Simple-404-Error-Page-Desktop-Prototype.png"
						alt=""
						className="h-auto w-full"
					/>
				</div>
				<div className="lg:px-20 space-y-4">
					<h2 className="font-bold text-4xl md:text-9xl">404</h2>
					<p className="text-xl">
						Sorry, the page you&apos;re <br />
						looking for doesn&apos;t exist
					</p>
					<div className="flex gap-4">
						<Link to={'/'}>
							<button className="border-2 w-36 rounded-2xl py-1 border-neutral-800">
								Home
							</button>
						</Link>
						<button className="border-2 w-36 rounded-2xl py-1 border-neutral-800">
							Contact
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ErrorElement;
