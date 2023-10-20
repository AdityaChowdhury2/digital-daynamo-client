import { Helmet } from 'react-helmet-async';
import Brands from '../../components/Brands/Brands';
import HomeBanner from '../../components/Banner/HomeBanner';
import { Icon } from '@iconify/react';

const Home = () => {
	return (
		<div className="bg-gray-100 dark:bg-gray-700 text-zinc-800 dark:text-zinc-300">
			<Helmet>
				<title>Digital Dynamo | Home</title>
			</Helmet>
			<HomeBanner />
			<Brands />

			<section className="py-12 bg-zinc-200 dark:bg-gray-800">
				<div className="flex flex-col items-center gap-4 justify-center mb-10">
					<h3 className="text-center font-bold text-3xl">
						Trusted by the Industry Leaders
					</h3>
					<div className="relative w-32 h-2  bg-slate-600 dark:bg-slate-200 rounded-lg">
						<div className="absolute w-8 h-4 bg-slate-300 dark:bg-slate-500 right-[40%] -top-1 rounded-md"></div>
					</div>
				</div>
				<div className="">
					<div className="container flex flex-wrap justify-center mx-auto dark:text-gray-400">
						<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
							<Icon icon="fluent-mdl2:amazon-web-services-logo" width={56} />
						</div>
						<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
							<Icon icon="basil:apple-outline" width={56} />
						</div>
						<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
							<Icon icon="teenyicons:docker-outline" width={56} />
						</div>
						<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
							<Icon icon="simple-icons:lg" width={56} />
						</div>
						<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
							<Icon icon="cib:intel" width={56} />
						</div>
						<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
							<Icon icon="mdi:microsoft" width={56} />
						</div>
						<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
							<Icon icon="ic:round-paypal" width={56} />
						</div>
						<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
							<Icon icon="ri:netflix-fill" width={56} />
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="flex flex-col items-center gap-4 justify-center my-10">
					<h3 className=" font-bold text-3xl">Our Team</h3>
					<div className="relative w-32 h-2  bg-slate-600 dark:bg-slate-200 rounded-lg">
						<div className="absolute w-8 h-4 bg-slate-300 dark:bg-slate-500 right-[40%] -top-1 rounded-md"></div>
					</div>
				</div>
				<div className=" body-font">
					<div className="container px-5 py-24 mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -m-4 justify-center">
							<div className="lg:mb-0 mb-6 p-4 flex justify-center">
								<div className="flex flex-col justify-center w-full md:max-w-xs p-6 bg-zinc-200 dark:bg-gray-800 shadow-md rounded-xl sm:px-12 ">
									<img
										src="https://randomuser.me/api/portraits/women/91.jpg"
										alt="Celina Pearson"
										className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
									/>
									<div className="space-y-4 text-center divide-y divide-gray-700 dark:divide-gray-100 ">
										<div className="my-2 space-y-1">
											<h2 className="text-xl font-semibold sm:text-2xl">
												Celina Pearson
											</h2>
											<p className="px-5 text-xs sm:text-base">CEO</p>
										</div>
										<div className="flex justify-center pt-2 space-x-4 align-center">
											<a
												rel="noopener noreferrer"
												href="#"
												aria-label="GitHub"
												className="p-2 rounded-md  hover:text-violet-400"
											>
												<Icon icon="mdi:github" width={20} />
											</a>

											<a
												rel="noopener noreferrer"
												href="#"
												aria-label="Twitter"
												className="p-2 rounded-md  hover:text-violet-400"
											>
												<Icon icon="mdi:twitter" width={20} />
											</a>
											<a
												rel="noopener noreferrer"
												href="#"
												aria-label="Email"
												className="p-2 rounded-md  hover:text-violet-400"
											>
												<Icon icon="ic:outline-mail" width={20} />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className=" lg:mb-0 mb-6 p-4 flex justify-center">
								<div className="flex flex-col justify-center w-full md:max-w-xs p-6 bg-zinc-200 dark:bg-gray-800 shadow-md rounded-xl sm:px-12">
									<img
										src="https://randomuser.me/api/portraits/men/81.jpg"
										alt="Luke Howell"
										className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
									/>
									<div className="space-y-4 text-center divide-y divide-gray-700 dark:divide-gray-100 ">
										<div className="my-2 space-y-1">
											<h2 className="text-xl font-semibold sm:text-2xl">
												Luke Howell
											</h2>
											<p className="px-5 text-xs sm:text-base">CTO</p>
										</div>
										<div className="flex justify-center pt-2 space-x-4 align-center">
											<a
												rel="noopener noreferrer"
												href="#"
												aria-label="GitHub"
												className="p-2 rounded-md  hover:text-violet-400"
											>
												<Icon icon="mdi:github" width={20} />
											</a>

											<a
												rel="noopener noreferrer"
												href="#"
												aria-label="Twitter"
												className="p-2 rounded-md  hover:text-violet-400"
											>
												<Icon icon="mdi:twitter" width={20} />
											</a>
											<a
												rel="noopener noreferrer"
												href="#"
												aria-label="Email"
												className="p-2 rounded-md  hover:text-violet-400"
											>
												<Icon icon="ic:outline-mail" width={20} />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="md:col-span-2 lg:col-auto lg:mb-0 mb-6 p-4 flex justify-center">
								<div className="flex flex-col justify-center w-full md:max-w-xs p-6 bg-zinc-200 dark:bg-gray-800 shadow-md rounded-xl sm:px-12">
									<img
										src="https://randomuser.me/api/portraits/men/88.jpg"
										alt="Stanley Mitchelle"
										className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
									/>
									<div className="space-y-4 text-center divide-y divide-gray-700 dark:divide-gray-100 ">
										<div className="my-2 space-y-1">
											<h2 className="text-xl font-semibold sm:text-2xl">
												Stanley Mitchelle
											</h2>
											<p className="px-5 text-xs sm:text-base">CFO</p>
										</div>
										<div className="flex justify-center pt-2 space-x-4 align-center">
											<a
												rel="noopener noreferrer"
												href="#"
												aria-label="GitHub"
												className="p-2 rounded-md  hover:text-violet-400"
											>
												<Icon icon="mdi:github" width={20} />
											</a>

											<a
												rel="noopener noreferrer"
												href="#"
												aria-label="Twitter"
												className="p-2 rounded-md  hover:text-violet-400"
											>
												<Icon icon="mdi:twitter" width={20} />
											</a>
											<a
												rel="noopener noreferrer"
												href="#"
												aria-label="Email"
												className="p-2 rounded-md  hover:text-violet-400"
											>
												<Icon icon="ic:outline-mail" width={20} />
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="flex flex-col items-center gap-4 justify-center mb-10">
					<h3 className=" font-bold text-3xl">Contact Us</h3>
					<div className="relative w-32 h-2  bg-slate-600 dark:bg-slate-200 rounded-lg">
						<div className="absolute w-8 h-4 bg-slate-300 dark:bg-slate-500 right-[40%] -top-1 rounded-md"></div>
					</div>
				</div>

				<div className="body-font relative">
					<div className="absolute inset-0 ">
						<iframe
							width="100%"
							height="100%"
							frameBorder="0"
							marginHeight="0"
							marginWidth="0"
							title="map"
							scrolling="no"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59046.00597881342!2d91.78842666518118!3d22.3394509329647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a71c5c3451%3A0x8145d1408572eb24!2sKotwali%2C%20Chattogram!5e0!3m2!1sen!2sbd!4v1697744462997!5m2!1sen!2sbd"
							// style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
						<div className="hidden bg-gray-100 dark:bg-gray-800 absolute bottom-20 left-40 lg:flex flex-wrap py-6 rounded shadow-md">
							<div className="lg:w-1/2 px-6">
								<h2 className="title-font font-semibold  tracking-widest text-xs">
									ADDRESS
								</h2>
								<p className="mt-1">
									Anderkilla, Kotwali, Chattogram - 4000, Chattogram
								</p>
							</div>
							<div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
								<h2 className="title-font font-semibold tracking-widest text-xs">
									EMAIL
								</h2>
								<a className="text-indigo-500 leading-relaxed">
									example@email.com
								</a>
								<h2 className="title-font font-semibold  tracking-widest text-xs mt-4">
									PHONE
								</h2>
								<p className="leading-relaxed">123-456-7890</p>
							</div>
						</div>
					</div>
					<div className="container px-5 py-24 mx-auto flex">
						<div className="lg:w-1/3 md:w-1/2 bg-gray-100 dark:bg-gray-800 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
							<h2 className="text-lg mb-1 font-medium title-font">
								Contact Us
							</h2>
							<p className="leading-relaxed mb-5 "></p>
							<div className="relative mb-4">
								<label htmlFor="email" className="leading-7 text-sm ">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className="w-full border  input input-bordered  bg-zinc-200 border-gray-300 
									dark:text-zinc-100 
									dark:bg-gray-900
									focus:outline-gray-300 outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								/>
							</div>
							<div className="relative mb-4">
								<label htmlFor="message" className="leading-7 text-sm t">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									className="w-full border  input input-bordered  bg-zinc-200 border-gray-300 
									dark:text-zinc-100 
									dark:bg-gray-900
									focus:outline-gray-300   outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								></textarea>
							</div>
							<button className=" dark:bg-gray-600 bg-zinc-300 hover:bg-zinc-400 border-0 py-2 px-6 dark:hover:bg-gray-700 focus:outline-none  rounded text-lg">
								Send Message
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
