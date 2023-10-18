import emptyCart from '/empty-cart.svg';
const Cart = () => {
	return (
		<>
			<h2 className="text-center font-bold text-4xl my-10">Cart is empty</h2>
			<div className="container flex justify-center mt-20 md:mt-40 h-[50vh] px-2 ">
				<img src={emptyCart} alt="" />
			</div>
		</>
	);
};

export default Cart;
