import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Brands = () => {
	const [brands, setBrands] = useState([]);
	useEffect(() => {
		fetch('https://digital-dynamo-server.vercel.app/api/brands')
			.then(res => res.json())
			.then(data => setBrands(data));
	}, []);
	return (
		<section className="container my-10 px-2">
			<div className="flex flex-col items-center gap-4 justify-center mb-10">
				<h3 className=" font-bold text-3xl">Browse Brands</h3>
				<div className="relative w-32 h-2 bg-base-300 rounded-lg">
					<div className="absolute w-8 h-4 bg-base-300 right-[40%] -top-1 rounded-md"></div>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{brands.map(brand => (
					<Link key={brand._id} to={`/brands/${brand.name}`}>
						<div className="relative grid h-[25rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
							<div
								style={{ backgroundImage: `url('${brand.brand_image}')` }}
								className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
							>
								<div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
							</div>
							<div className="relative p-6 px-6 py-14 md:px-12">
								<h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
									{brand.name}
								</h2>
							</div>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
};

export default Brands;
