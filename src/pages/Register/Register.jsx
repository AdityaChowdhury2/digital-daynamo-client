import Lottie from 'lottie-react';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import RegistrationAnimation from './registrationAnimation.json';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<section className="bg-base-100 container  mt-20">
			<div className="flex items-center">
				<div className="w-1/2">
					<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
						<div>
							<div className="flex justify-center w-20">
								<img
									src={'https://i.ibb.co/LPv0gD7/digidynamo-Logo.png'}
									alt=""
								/>
							</div>
						</div>
						<div className="w-full bg-base-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
							<div className="p-6 space-y-4 md:space-y-6 sm:p-8 min-w-lg">
								<h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl ">
									Create a new account with us
								</h1>
								<form className="space-y-4 md:space-y-6" action="#">
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

										<input
											type="password"
											name="password"
											id="password"
											placeholder="**********"
											className="input input-bordered w-full "
										/>
									</div>

									<button
										type="submit"
										className="w-full  bg-base-200 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-base-300"
									>
										Sign in
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
				</div>
				<div className="flex-1">
					<Lottie animationData={RegistrationAnimation} loop={true} />
				</div>
			</div>
		</section>
	);
};

export default Register;