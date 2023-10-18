import Lottie from 'lottie-react';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import RegistrationAnimation from './registrationAnimation.json';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Register = () => {
	const [isShow, setIsShow] = useState(false);
	const { createUser } = useAuth();
	const handleSignUp = e => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		if (password.length < 6) {
			console.log('Password must be at least 6 characters');
		} else if (/^[^A-Z]*$/.test(password)) {
			console.log('Password must contain minimum one capital letter');
		} else if (/^[^!@#$%^&*()_]*$/.test(password)) {
			console.log('Password must contain at least one special character');
		} else {
			createUser(email, password).then(res => console.log(res.user));
		}
	};
	return (
		<section className="bg-base-100 container  mt-20">
			<Helmet>
				<title>Digital Dynamo | Register</title>
			</Helmet>
			<div className="flex items-center">
				<div className="w-1/2">
					<div className="w-full bg-base-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
						<div className="p-6 space-y-4 sm:p-8 min-w-lg">
							<div className="flex justify-center">
								<div className="w-20">
									<img
										src={'https://i.ibb.co/LPv0gD7/digidynamo-Logo.png'}
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
										className="input input-bordered w-full "
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
											className="input input-bordered w-full "
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
									className="w-full  bg-base-200 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-base-300"
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
				<div className="flex-1">
					<Lottie animationData={RegistrationAnimation} loop={true} />
				</div>
			</div>
		</section>
	);
};

export default Register;
