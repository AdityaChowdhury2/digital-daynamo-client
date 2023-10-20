import { useLoaderData, useNavigate } from 'react-router-dom';
import ReactStars from 'react-rating-star-with-type';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
	const loadedProduct = useLoaderData();
	const [rating, setRating] = useState(loadedProduct.rating);
	const navigate = useNavigate();
	console.log(loadedProduct);
	const handleDelete = () => {
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
				axios
					.delete(
						`https://digital-dynamo-server.vercel.app/api/product/${loadedProduct._id}`
					)
					.then(response => {
						if (response.data.deletedCount) {
							Swal.fire('Deleted!', 'Your Item has been deleted.', 'success');
							navigate('/');
						}
					})
					.catch(e => {
						console.log(e);
					});
			}
		});
	};
	const handleUpdate = async e => {
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
			.put(
				`https://digital-dynamo-server.vercel.app/api/product/${loadedProduct._id}`,
				product,
				{
					headers: { 'Content-Type': 'application/json' },
				}
			)
			.catch(e => {
				console.log(e.message);
			});

		if (response.data.modifiedCount) {
			Swal.fire({ icon: 'success', title: 'Data Updated successfully' });
		}
	};
	return (
		<section className="">
			<div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
				<h2 className="mb-4 text-xl font-bold">Update product</h2>
				<form onSubmit={handleUpdate}>
					<div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
						<div className="sm:col-span-2">
							<label htmlFor="name" className="block mb-2 text-sm font-medium ">
								Product Name
							</label>
							<input
								type="text"
								name="name"
								id="name"
								defaultValue={loadedProduct.name}
								className="input input-bordered w-full"
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
								defaultValue={loadedProduct.image}
								className="input input-bordered w-full"
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
								defaultValue={loadedProduct.brand}
								className=" border border-gray-300 text-sm rounded-lg  block w-full p-2.5 "
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
								defaultValue={loadedProduct.price}
								className="input input-bordered w-full"
								placeholder="$2999"
								required
							/>
						</div>
						<div>
							<label htmlFor="type" className="block mb-2 text-sm font-medium">
								Type
							</label>
							<select
								id="type"
								name="type"
								className=" border border-gray-300 text-sm rounded-lg  block w-full p-2.5 "
								defaultValue={loadedProduct.type}
								required
							>
								<option value="">Select type</option>
								<option value="TV">TV/Monitors</option>
								<option value="PC">PC</option>
								<option value="Gaming Console">Gaming/Console</option>
								<option value="Headphone">Headphone</option>
								<option value="Camera">Camera</option>
								<option value="Phone">Phone</option>
								<option value="Watch">Watch</option>
								<option value="Tablet">Tablet</option>
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
									value={rating}
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
								defaultValue={loadedProduct.short_description}
								className="block p-2.5 w-full text-sm rounded-lg border border-gray-300 "
								placeholder="Product description here"
							></textarea>
						</div>
					</div>
					<div className="flex justify-around">
						<button type="submit" className="btn mt-10">
							Update product
						</button>
						<div onClick={handleDelete} className="btn btn-error mt-10">
							Delete product
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

export default UpdateProduct;
