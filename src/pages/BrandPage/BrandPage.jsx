import { Link, useLoaderData, useParams } from 'react-router-dom';
import BrandsBanner from '../../components/Banner/BrandsBanner';
import { useEffect, useState } from 'react';

const BrandPage = () => {
	const [banners, setBanners] = useState([]);
	const brandsProducts = useLoaderData();
	const params = useParams();

	useEffect(() => {
		fetch(`http://127.0.0.1:5000/api/banners/${params.brand}`)
			.then(res => res.json())
			.then(data => setBanners(data.banner_images));
	}, [params.brand]);

	return (
		<div>
			{banners.length && <BrandsBanner banners={banners} />}
			{brandsProducts.length ? (
				<div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-5 px-2">
					{brandsProducts.map(product => (
						<div
							key={product._id}
							className="md:w-80 xl:w-96 p-2 m-auto bg-base-200 shadow-lg rounded-2xl "
						>
							<div className="block overflow-hidden">
								<img
									src={product.image}
									alt="adidas"
									className="w-2/3 p-4 m-auto h-48  object-cover transition duration-500 hover:scale-105 "
								/>
							</div>

							<div className="p-4 m-3 bg-base-100 rounded-lg">
								<div className="flex justify-between">
									<p className="text-gray-400">
										<small>{product.brand}</small>
									</p>
									<p className="text-gray-400">
										<small>{product.type}</small>
									</p>
								</div>
								<p className="md:text-xl text-lg font-bold">{product.name}</p>
								<p className="text-xs my-2">{product.short_description}</p>
								<p className="">${product.price}</p>

								<div className="flex justify-between mt-4">
									<Link to={`/product/${product._id}`}>
										<button className="btn">Details</button>
									</Link>
									<Link to={`/updateProduct/${product._id}`}>
										<button className="btn">Update</button>
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
