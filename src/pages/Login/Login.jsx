import Lottie from 'lottie-react';
import LoginAnimation from './loginAnimation.json';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';
const Login = () => {
	const [isShow, setIsShow] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const { logIn } = useAuth();
	const handleSignIn = async e => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		await logIn(email, password)
			.then(res => {
				console.log(res.user);
				navigate(location.state || '/');
			})
			.catch(() => {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Credentials does not match with our database',
				});
			});
	};

	return (
		<section className="bg-base-100 container  mt-20">
			<Helmet>
				<title>Digital Dynamo | Login</title>
			</Helmet>
			<div className="flex items-center flex-col-reverse lg:flex-row px-2">
				<div className="lg:w-1/2 w-full">
					<div className="bg-base-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 mx-auto">
						<div className="p-6 space-y-4 sm:p-8 min-w-lg">
							<div className="flex justify-center">
								<div className="w-20">
									<img
										src={'https://i.ibb.co/LPv0gD7/digidynamo-Logo.png'}
										alt=""
									/>
								</div>
							</div>
							<h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl ">
								Sign in to your account
							</h1>
							<form className="space-y-4 md:space-y-6" onSubmit={handleSignIn}>
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
									className="w-full bg-base-200 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-base-300"
								>
									Sign in
								</button>
								<p className="text-sm font-light ">
									Don&apos;t have an account yet?{' '}
									<Link to="/register" className="font-medium">
										Sign up
									</Link>
								</p>
							</form>
							<div className="divider">OR</div>
							<SocialLogin />
						</div>
					</div>
				</div>
				<div className="flex-1">
					<Lottie animationData={LoginAnimation} loop={true} />
				</div>
			</div>
		</section>
	);
};

export default Login;
