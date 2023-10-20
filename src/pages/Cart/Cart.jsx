import { useEffect, useState } from 'react';
import emptyCart from '/empty-cart.svg';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Icon } from '@iconify/react';
const Cart = () => {
	const { user } = useAuth();
	const [cart, setCart] = useState(null);
	console.log(cart);

	const handleRemoveOne = async id => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then(result => {
			if (result.isConfirmed) {
				const updatedCart = cart.filter(product => product._id !== id);
				axios
					.patch(
						`https://digital-dynamo-server.vercel.app/api/user/${user.email}`,
						updatedCart,
						{
							headers: { 'Content-Type': 'application/json' },
						}
					)
					.then(response => {
						if (response.data.modifiedCount) {
							setCart(updatedCart);
							Swal.fire('Deleted!', 'Item Deleted successfully.', 'success');
						}
					});
			}
		});
	};
	useEffect(() => {
		fetch(`https://digital-dynamo-server.vercel.app/api/user/${user.email}`)
			.then(res => res.json())
			.then(data => setCart(data?.cart));
	}, [user.email]);
	return (
		<div className="container">
			{cart?.length ? (
				<div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
					<h2 className="text-xl font-semibold">Your cart</h2>
					<ul className="flex flex-col divide-y divide-gray-700 dark:divide-gray-100">
						{cart.map(product => (
							<li
								key={product._id}
								className="flex flex-col py-6 sm:flex-row sm:justify-between"
							>
								<div className="flex w-full space-x-2 sm:space-x-4">
									<img
										className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32"
										src={product.image}
										alt={product.name + "'s image"}
									/>
									<div className="flex flex-col justify-between w-full pb-4">
										<div className="flex justify-between w-full pb-2 space-x-2">
											<div className="space-y-1">
												<h3 className="text-lg font-semibold leadi sm:pr-8">
													{product.quantity + 'x' + product.name}
												</h3>
												<p className="text-sm ">{product.brand}</p>
											</div>
											<div className="text-right">
												<p className="text-lg font-semibold">
													{product.price}$
												</p>
												<p className="text-sm">
													{product.price * product.quantity}$
												</p>
											</div>
										</div>
										<div className="flex text-sm divide-x">
											<button
												onClick={() => handleRemoveOne(product._id)}
												type="button"
												className="flex items-center px-2 py-1 pl-0 space-x-1"
											>
												<Icon icon="mdi:bin-outline" />
												<span>Remove</span>
											</button>
											<button
												type="button"
												className="flex items-center px-2 py-1 space-x-1"
											>
												<Icon icon="material-symbols:favorite-outline" />
												<span>Add to favorites</span>
											</button>
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
					<div className="space-y-1 text-right">
						<p>
							Total amount:
							<span className="font-semibold">
								{cart.reduce(
									(prev, curr) => prev + curr.quantity * curr.price,
									0
								)}
							</span>
						</p>
						<p className="text-sm dark:text-gray-400">
							Not including taxes and shipping costs
						</p>
					</div>
					<div className="flex justify-end space-x-4">
						<Link to={'/'}>
							<button type="button" className="px-6 py-2 border rounded-md">
								Back
								<span className="sr-only sm:not-sr-only">to Home</span>
							</button>
						</Link>
						<button type="button" className="px-6 py-2 border rounded-md ">
							<span className="sr-only sm:not-sr-only">Continue to</span>
							Checkout
						</button>
					</div>
				</div>
			) : (
				<>
					<h2 className="text-center font-bold text-4xl my-10">
						Cart is empty
					</h2>
					<div className="container flex justify-center mt-20 md:mt-40 h-[50vh] px-2 ">
						<img src={emptyCart} alt="" />
					</div>
				</>
			)}
		</div>
	);
};

export default Cart;
