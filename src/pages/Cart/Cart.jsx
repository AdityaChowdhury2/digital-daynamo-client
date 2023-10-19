import { useEffect, useState } from 'react';
import emptyCart from '/empty-cart.svg';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
const Cart = () => {
	const { user } = useAuth();
	const [cart, setCart] = useState(null);
	const handleRemoveOne = async id => {
		const updatedCart = cart.filter(product => product._id !== id);
		const response = await axios.patch(
			`http://127.0.0.1:5000/api/user/${user.email}`,
			updatedCart,
			{ headers: { 'Content-Type': 'application/json' } }
		);
		if (response.data.modifiedCount) {
			setCart(updatedCart);
			Swal.fire({ icon: 'success', title: 'Item Deleted successfully' });
		}
	};
	useEffect(() => {
		fetch(`http://127.0.0.1:5000/api/user/${user.email}`)
			.then(res => res.json())
			.then(data => setCart(data?.cart));
	}, [user.email]);
	return (
		<div className="container">
			{cart?.length ? (
				<>
					<h2 className="text-center text-3xl font-bold my-12">My Cart</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
						{cart.map(product => (
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
									<div className="flex justify-between">
										<p className="">${product.price}</p>
										<p className="">Quantity: {product.quantity}</p>
									</div>

									<div className="flex justify-between mt-4">
										<button
											className="btn btn-error"
											onClick={() => handleRemoveOne(product._id)}
										>
											Remove Item
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</>
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
