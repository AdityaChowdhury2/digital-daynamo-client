import Lottie from 'lottie-react';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import RegistrationAnimation from './registrationAnimation.json';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';

const Register = () => {
	const [isShow, setIsShow] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const { createUser } = useAuth();
	const handleSignUp = e => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		if (password.length < 6) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Password must be at least 6 characters',
			});
		} else if (/^[^A-Z]*$/.test(password)) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Password must contain minimum one capital letter',
			});
			console.log('');
		} else if (/^[^!@#$%^&*()_]*$/.test(password)) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Password must contain minimum one special character',
			});
		} else {
			createUser(email, password).then(res => {
				console.log(res.user);
				navigate(location.state || '/');
				const user = {
					displayName: res.user.displayName,
					email: res.user.email,
					uid: res.user.uid,
				};
				axios
					.put(`http://localhost:5000/api/v1/user/${user.uid}`, user)
					.then(response => {
						console.log(response.data);
					})
					.catch(err => {
						console.log(err);
					});
			});
		}
	};
	return (
		<section className=" container  lg:mt-20">
			<Helmet>
				<title>Digital Dynamo | Register</title>
			</Helmet>
			<div className="flex items-center flex-col-reverse lg:flex-row px-2">
				<div className="lg:w-1/2 w-full">
					<div className=" rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 mx-auto">
						<div className="p-6 space-y-4 sm:p-8 min-w-lg bg-zinc-50 dark:bg-gray-800 rounded-lg">
							<div className="flex justify-center">
								<div className="w-20">
									<img
										src={'https://i.ibb.co/2hr24MN/digidynamo-Logo.png'}
										alt=""
									/>
								</div>
							</div>
							<h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl mt-2 ">
								Create a new account with us
							</h1>
							<form className="space-y-4 md:space-y-6" onSubmit={handleSignUp}>
								<div>
									<label
										htmlFor="email"
										className="block mb-2 text-sm font-medium "
									>
										Your email
									</label>

									<input
										type="email"
										name="email"
										id="email"
										placeholder="name@company.com"
										className="input input-bordered w-full bg-zinc-200 border-gray-300 
										dark:text-zinc-100 
										dark:bg-gray-900 focus:outline-gray-300"
									/>
								</div>
								<div>
									<label
										htmlFor="password"
										className="block mb-2 text-sm font-medium "
									>
										Password
									</label>
									<div className="relative">
										<input
											type={`${isShow ? 'text' : 'password'}`}
											name="password"
											id="password"
											placeholder="enter your password"
											className="input input-bordered w-full bg-zinc-200 border-gray-300 
											dark:text-zinc-100 
											dark:bg-gray-900 focus:outline-gray-300"
										/>
										<div
											className="absolute right-3 top-1/4 hover:cursor-pointer"
											onClick={() => {
												setIsShow(!isShow);
											}}
										>
											{isShow ? (
												<Icon icon="emojione:see-no-evil-monkey" width={24} />
											) : (
												<Icon icon="emojione:monkey-face" width={24} />
											)}
										</div>
									</div>
								</div>

								<button
									type="submit"
									className="w-full dark:bg-gray-600 bg-zinc-300 hover:bg-zinc-400 border-0 py-2 px-6 dark:hover:bg-gray-700 focus:outline-none  rounded text-lg"
								>
									Sign Up
								</button>
								<p className="text-sm font-light ">
									Already Have an account?{' '}
									<Link to="/login" className="font-medium">
										Sign In
									</Link>
								</p>
							</form>
							<div className="divider">OR</div>
							<SocialLogin />
						</div>
					</div>
				</div>
				<div className="lg:flex-1 ">
					<Lottie
						animationData={RegistrationAnimation}
						loop={true}
						className="h-[250px] lg:h-auto"
					/>
				</div>
			</div>
		</section>
	);
};

export default Register;
