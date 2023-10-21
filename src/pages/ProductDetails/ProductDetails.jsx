import { Icon } from '@iconify/react';
import ReactStars from 'react-rating-star-with-type';
import { useLoaderData } from 'react-router-dom';

import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const ProductDetails = () => {
	const loadedProduct = useLoaderData();
	const { user } = useAuth();
	const [quantity, setQuantity] = useState(1);

	const handleAddToCart = async () => {
		const response = await axios.get(
			`http://localhost:5000/api/user/${user.uid}`
		);
		const newProduct = { ...loadedProduct, quantity };
		if (response.data.cart) {
			const cart = response.data.cart;
			cart.push(newProduct);
			axios
				.patch(`http://localhost:5000/api/user/${user.uid}`, cart, {
					headers: { 'Content-Type': 'application/json' },
				})
				.then(response => {
					if (response.data.modifiedCount) {
						Swal.fire({ icon: 'success', title: 'Product added to your cart' });
					}
				});
		} else {
			axios
				.patch(`http://localhost:5000/api/user/${user.uid}`, [newProduct], {
					headers: { 'Content-Type': 'application/json' },
				})
				.then(response => {
					if (response.data.modifiedCount) {
						Swal.fire({ icon: 'success', title: 'Product added to your cart' });
					}
				});
		}
	};

	return (
		<section className=" body-font overflow-hidden">
			<div className="container px-5 py-24 mx-auto">
				<div className="lg:w-4/5 mx-auto flex flex-wrap items-center">
					<img
						alt="ecommerce"
						className="md:w-1/2 w-full lg:h-auto h-64  rounded mx-auto"
						src={loadedProduct?.image}
					/>
					<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
						<h2 className="text-sm title-font  tracking-widest">
							{loadedProduct?.brand?.toUpperCase()}
						</h2>
						<h1 className=" text-3xl title-font font-medium mb-1">
							{loadedProduct?.name}
						</h1>
						<div className="my-2 flex gap-3">
							<ReactStars value={loadedProduct?.rating} />(
							{loadedProduct?.rating})
						</div>
						<p className="leading-relaxed">
							{loadedProduct?.short_description}
						</p>

						<div className="mb-2 flex items-center mt-3 justify-between">
							<p className="font-semibold">Quantity:</p>
							<div className="flex gap-2 relative text-zinc-800 dark:text-zinc-300">
								<button
									className="absolute top-0.5 text-2xl left-2"
									onClick={() => {
										quantity > 1 && setQuantity(value => value - 1);
									}}
								>
									-
								</button>
								<input
									type="text"
									value={quantity}
									onChange={e => setQuantity(e.target.value)}
									className="input input-bordered bg-zinc-200 border-gray-300 
									dark:text-zinc-100 
									dark:bg-gray-900 focus:outline-gray-300 rounded-3xl w-32 mx-auto h-10 px-14"
								/>
								<button
									className="absolute top-1 text-xl right-3"
									onClick={() => {
										quantity < 9 && setQuantity(value => value + 1);
									}}
								>
									+
								</button>
							</div>
						</div>
						<div className="flex mt-12 items-center">
							<span className="title-font font-medium text-2xl ">
								${loadedProduct?.price}
							</span>
							<button
								onClick={() => handleAddToCart()}
								className="flex ml-auto dark:bg-gray-600 bg-zinc-300 hover:bg-zinc-400 focus:outline-none  dark:hover:bg-gray-800 btn border-0 py-2 px-4 md:px-6 "
							>
								Add to Cart
							</button>
							<button className=" dark:bg-gray-600 bg-zinc-300 hover:bg-zinc-400 focus:outline-none  dark:hover:bg-gray-800 rounded-full w-10 h-10  p-0 border-0 inline-flex items-center justify-center  ml-4">
								<Icon icon="bi:heart-fill" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductDetails;
