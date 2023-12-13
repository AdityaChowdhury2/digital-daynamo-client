import { Link, useLoaderData, useParams } from 'react-router-dom';
import BrandsBanner from '../../components/Banner/BrandsBanner';
import { useEffect, useState } from 'react';

const BrandPage = () => {
	const [banners, setBanners] = useState([]);
	const brandsProducts = useLoaderData();
	const params = useParams();

	useEffect(() => {
		fetch(`http://localhost:5000/api/v1/banners/${params.brand}`)
			.then(res => res.json())
			.then(data => {
				setBanners(data.banner_images);
			});
	}, [params.brand]);

	return (
		<div>
			{banners?.length && <BrandsBanner banners={banners} />}
			{brandsProducts?.length ? (
				<div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-5 px-4">
					{brandsProducts.map(product => (
						<div
							key={product._id}
							className="md:w-80 xl:w-96 p-2 m-auto bg-gray-100 dark:bg-gray-800 
							 shadow-lg rounded-2xl "
						>
							<div className="block overflow-hidden">
								<img
									src={product.image}
									alt="adidas"
									className="w-2/3 p-4 m-auto h-48 hover:cursor-pointer object-cover transition duration-500 hover:scale-105 "
								/>
							</div>

							<div className="p-4 m-3  rounded-lg">
								<div className="flex justify-between">
									<p className="text-gray-400">
										<small>{product.brand}</small>
									</p>
									<p className="text-gray-400">
										<small>{product.category}</small>
									</p>
								</div>
								<p className="md:text-xl text-lg font-bold">{product.name}</p>
								<p className="text-xs my-2">{product.short_description}</p>
								<p className="">${product.price}</p>

								<div className="flex justify-between mt-4">
									<Link to={`/product/${product._id}`}>
										<button className="dark:bg-gray-600 bg-zinc-300 hover:bg-zinc-400 focus:outline-none  dark:hover:bg-gray-700 btn border-0">
											Details
										</button>
									</Link>
									<Link to={`/updateProduct/${product._id}`}>
										<button className="dark:bg-gray-600 bg-zinc-300 hover:bg-zinc-400 focus:outline-none  dark:hover:bg-gray-700 btn border-0">
											Update
										</button>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			) : (
				<div className="flex justify-center items-center h-[30vh]">
					<h2 className="text-3xl font-semibold">Products Are Coming Soon</h2>
				</div>
			)}
		</div>
	);
};

export default BrandPage;
