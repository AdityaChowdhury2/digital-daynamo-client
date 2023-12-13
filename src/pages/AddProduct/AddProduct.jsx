import { Icon } from '@iconify/react';
import axios from 'axios';
import { useState } from 'react';
import ReactStars from 'react-rating-star-with-type';
import Swal from 'sweetalert2';

const AddProduct = () => {
	const [rating, setRating] = useState(0);
	const handleSubmit = async e => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const image = form.imageUrl.value;
		const brand = form.brand.value;
		const price = form.price.value;
		const type = form.type.value;
		const short_description = form.description.value;
		const product = {
			image,
			name,
			brand,
			type,
			price,
			short_description,
			rating,
		};
		const response = await axios
			.post(`http://localhost:5000/api/products/`, product, {
				headers: { 'Content-Type': 'application/json' },
			})
			.catch(e => {
				console.log(e.message);
			});

		if (response.data.insertedId) {
			Swal.fire({
				icon: 'success',
				title: 'Product Added ',
				text: 'Your product has been successfully inserted',
			});
			form.reset();
		}
	};
	return (
		<section>
			<div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
				<h2 className="mb-4 text-xl font-bold">Add a new product</h2>
				<form onSubmit={handleSubmit}>
					<div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
						<div className="sm:col-span-2">
							<label htmlFor="name" className="block mb-2 text-sm font-medium ">
								Product Name
							</label>
							<input
								type="text"
								name="name"
								id="name"
								className="input input-bordered w-full bg-zinc-200 border-gray-300 
								dark:text-zinc-100 
								dark:bg-gray-900 focus:outline-gray-300
								"
								placeholder="Type product name"
								required
							/>
						</div>
						<div className="sm:col-span-2">
							<label htmlFor="url" className="block mb-2 text-sm font-medium ">
								Product Image url
							</label>
							<input
								type="text"
								name="imageUrl"
								id="url"
								className="input input-bordered w-full bg-zinc-200 border-gray-300 
								dark:text-zinc-100 
								dark:bg-gray-900
								focus:outline-gray-300
								"
								placeholder="https://"
								required
							/>
						</div>
						<div className="w-full">
							<label
								htmlFor="brand"
								className="block mb-2 text-sm font-medium "
							>
								Brand
							</label>
							<select
								id="brand"
								name="brand"
								className=" border bg-zinc-200 dark:bg-gray-900 border-gray-300 text-sm rounded-lg  block w-full p-2.5 "
								required
							>
								<option value="">Select brand</option>
								<option value="Google">Google</option>
								<option value="Panasonic">Panasonic</option>
								<option value="Apple">Apple</option>
								<option value="Sony">Sony</option>
								<option value="Samsung">Samsung</option>
								<option value="Dell">Dell</option>
							</select>
						</div>
						<div className="w-full">
							<label
								htmlFor="price"
								className="block mb-2 text-sm font-medium "
							>
								Price
							</label>
							<input
								type="number"
								name="price"
								id="price"
								className="input input-bordered w-full bg-zinc-200 border-gray-300 
								dark:text-zinc-100 
								dark:bg-gray-900
								focus:outline-gray-300"
								placeholder="$2999"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="category"
								className="block mb-2 text-sm font-medium"
							>
								Category
							</label>
							<select
								id="category"
								name="category"
								className="border bg-zinc-200 dark:bg-gray-900 border-gray-300 text-sm rounded-lg  block w-full p-2.5 "
								required
							>
								<option value="">Select Category</option>
								<option value="Phone">Phone</option>
								<option value="TV">TV</option>
								<option value="Monitor">Monitor</option>
								<option value="Kitchen Appliance">Kitchen Appliance</option>
								<option value="Gaming Console">Gaming Console</option>
								<option value="Camera">Camera</option>
								<option value="Watch">Watch</option>
								<option value="Laptop">Laptop</option>
								<option value="Accessories">Accessories</option>
								<option value="Tablet">Tablet</option>
								<option value="Headphone">Headphone</option>
								<option value="PC">PC</option>
							</select>
						</div>
						<div>
							<label className="block mb-2 text-sm font-medium">Rating</label>
							<div>
								<ReactStars
									emptyIcon={<Icon icon="bi:star" height={32} />}
									halfIcon={<Icon icon="bi:star-half" height={32} />}
									filledIcon={<Icon icon="bi:star-fill" height={32} />}
									isHalf
									isEdit
									onChange={value => setRating(value)}
								/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<label
								htmlFor="description"
								className="block mb-2 text-sm font-medium "
							>
								Description
							</label>
							<textarea
								id="description"
								name="description"
								rows="8"
								className="block p-2.5  text-sm rounded-lg border w-full bg-zinc-200 border-gray-300 
								dark:text-zinc-100 
								dark:bg-gray-900
								focus:outline-gray-300 focus:outline-2 focus:outline-offset-2"
								placeholder="Product description here"
							></textarea>
						</div>
					</div>
					<button
						type="submit"
						className="w-full mt-10 border-0 dark:bg-gray-600 bg-zinc-300 hover:bg-zinc-400 focus:outline-none  dark:hover:bg-gray-800 py-2 px-6  rounded text-lg"
					>
						Add product
					</button>
				</form>
			</div>
		</section>
	);
};

export default AddProduct;
