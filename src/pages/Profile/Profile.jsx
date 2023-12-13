// import { useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';

const Profile = () => {
	const { user } = useAuth();
	const [image, setImage] = useState('');
	const [errMessage, setErrMessage] = useState('');
	// console.log(user);
	// const [userProfile, setUserProfile] = useState({
	// 	displayName: user?.displayName,
	// 	email: user?.email,
	// 	photoURL: user?.photoURL,
	// });
	const convertToBase64 = imageFile => {
		const reader = new FileReader();
		reader.readAsDataURL(imageFile);
		return new Promise((resolve, reject) => {
			try {
				reader.onload = () => {
					const convertedImage = reader.result;
					resolve(convertedImage);
				};
			} catch (error) {
				reject(error);
			}
		});
	};
	const handleSubmit = async e => {
		try {
			e.preventDefault();
			const form = new FormData(e.currentTarget);
			const userObj = {};
			for (const data of form.entries()) {
				userObj[data[0]] = data[1];
			}
			console.log(userObj);
			const imageFile = userObj?.profileImage;
			if (imageFile.size < 1000000) {
				const convertedImage = await convertToBase64(userObj?.profileImage);
				setImage(convertedImage);
				const updatedUser = {
					userImage: convertedImage,
					email: userObj?.email || '',
					name: userObj.firstName || '' + userObj?.lastName || '',
					address: userObj?.address,
					bio: userObj?.bio || '',
					city: userObj?.city || '',
					landmark: userObj?.landmark || '',
					userName: userObj?.username || '',
					website: userObj?.website || '',
					zip: userObj?.zip || '',
				};
				const response = await axios.put(
					`http://localhost:5000/api/v1/user/${user?.uid}`,
					updatedUser
				);
				if (response.upsertedCount) {
					console.log('Updated Successfully');
				}
			} else {
				setErrMessage('File size should not be exceeded than 1Mb');
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<section className="p-6">
			<form
				className="container flex flex-col mx-auto space-y-12"
				onSubmit={handleSubmit}
			>
				<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-zinc-50 dark:bg-gray-800">
					<div className="space-y-2 col-span-full  lg:col-span-1">
						<div>
							<p className="font-medium">Personal Information</p>
							<p className="text-xs"></p>
						</div>
					</div>
					<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
						<div className="col-span-full sm:col-span-3">
							<label htmlFor="firstName" className="text-sm">
								First name
							</label>
							<input
								id="firstName"
								type="text"
								placeholder="First name"
								name="firstName"
								defaultValue={user.displayName?.split(' ')[0]}
								className="input input-bordered w-full bg-zinc-200 border-gray-300 
							dark:text-zinc-100 
							dark:bg-gray-900 focus:outline-gray-300"
							/>
						</div>
						<div className="col-span-full sm:col-span-3">
							<label htmlFor="lastName" className="text-sm">
								Last name
							</label>
							<input
								id="lastName"
								type="text"
								name="lastName"
								defaultValue={user.displayName?.split(' ')[1] || ''}
								placeholder="Last name"
								className="input input-bordered w-full bg-zinc-200 border-gray-300 
							dark:text-zinc-100 
							dark:bg-gray-900 focus:outline-gray-300"
							/>
						</div>
						<div className="col-span-full sm:col-span-3">
							<label htmlFor="email" className="text-sm">
								Email
							</label>
							<input
								id="email"
								type="email"
								name="email"
								placeholder="Email"
								defaultValue={user?.email}
								className="input input-bordered w-full bg-zinc-200 border-gray-300 
							dark:text-zinc-100 
							dark:bg-gray-900 focus:outline-gray-300"
								readOnly
							/>
						</div>
						<div className="col-span-full">
							<label htmlFor="address" className="text-sm">
								Address
							</label>
							<input
								id="address"
								type="text"
								name="address"
								placeholder=""
								className="input input-bordered w-full bg-zinc-200 border-gray-300 
							dark:text-zinc-100 
							dark:bg-gray-900 focus:outline-gray-300"
							/>
						</div>
						<div className="col-span-full sm:col-span-2">
							<label htmlFor="landmark" className="text-sm">
								Landmark
							</label>
							<input
								id="landmark"
								type="text"
								name="landmark"
								placeholder=""
								className="input input-bordered w-full bg-zinc-200 border-gray-300 
							dark:text-zinc-100 
							dark:bg-gray-900 focus:outline-gray-300"
							/>
						</div>
						<div className="col-span-full sm:col-span-2">
							<label htmlFor="city" className="text-sm">
								City
							</label>
							<input
								id="city"
								name="city"
								type="text"
								placeholder="Dhaka"
								className="input input-bordered w-full bg-zinc-200 border-gray-300 
							dark:text-zinc-100 
							dark:bg-gray-900 focus:outline-gray-300"
							/>
						</div>
						<div className="col-span-full sm:col-span-2">
							<label htmlFor="zip" className="text-sm">
								ZIP / Postal
							</label>
							<input
								id="zip"
								name="zip"
								type="text"
								placeholder=""
								className="input input-bordered w-full bg-zinc-200 border-gray-300 
							dark:text-zinc-100 
							dark:bg-gray-900 focus:outline-gray-300"
							/>
						</div>
					</div>
				</fieldset>
				<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-zinc-50 dark:bg-gray-800">
					<div className="space-y-2 col-span-full lg:col-span-1 flex justify-between lg:flex-col">
						<div>
							<p className="font-medium">Profile</p>
							<p className="text-xs"></p>
						</div>
						<div className="lg:flex lg:justify-center">
							{image === '' || image === null ? (
								''
							) : (
								<img
									src={image}
									alt=""
									className="lg:w-32 lg:h-32 w-10 h-10  rounded-full"
								/>
							)}
						</div>
					</div>
					<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
						<div className="col-span-full sm:col-span-3">
							<label htmlFor="username" className="text-sm">
								Username
							</label>
							<input
								id="username"
								name="username"
								type="text"
								placeholder="Username"
								className="input input-bordered w-full bg-zinc-200 border-gray-300 
							dark:text-zinc-100 
							dark:bg-gray-900 focus:outline-gray-300"
							/>
						</div>
						<div className="col-span-full sm:col-span-3">
							<label htmlFor="website" className="text-sm">
								Website
							</label>
							<input
								id="website"
								name="website"
								type="text"
								placeholder="https://"
								className="input input-bordered w-full bg-zinc-200 border-gray-300 
							dark:text-zinc-100 
							dark:bg-gray-900 focus:outline-gray-300"
							/>
						</div>
						<div className="col-span-full">
							<label htmlFor="bio" className="text-sm">
								Bio
							</label>
							<textarea
								id="bio"
								name="bio"
								placeholder=""
								className="input input-bordered w-full bg-zinc-200 border-gray-300 
							dark:text-zinc-100 
							dark:bg-gray-900 focus:outline-gray-300"
							></textarea>
						</div>
						<div className="col-span-full">
							<label htmlFor="bio" className="text-sm">
								Photo
							</label>
							<div className="flex items-center space-x-2">
								<div>
									<input
										name="profileImage"
										className="text-sm md:text-base"
										type="file"
										accept="image/*"
										onChange={() => {
											setErrMessage('');
										}}
									/>
									<p>
										{errMessage && (
											<span className="text-xs text-red-500">{errMessage}</span>
										)}
									</p>
								</div>
							</div>
						</div>
					</div>
				</fieldset>
				<div className="flex justify-center">
					<button className="dark:bg-gray-600 bg-zinc-300 hover:bg-zinc-400 focus:outline-none  dark:hover:bg-gray-800 btn border-0">
						Update
					</button>
				</div>
			</form>
		</section>
	);
};

export default Profile;
