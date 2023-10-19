import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import userDefault from '/user.svg';

const Header = () => {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'garden');
	const { user, logOut } = useAuth();

	const handleThemeChange = () => {
		theme === 'garden' ? setTheme('night') : setTheme('garden');
	};
	const handleLogout = () => {
		logOut()
			.then(() => {
				console.log('user logged out');
			})
			.catch(e => {
				console.log(e.message);
			});
	};

	useEffect(() => {
		localStorage.setItem('theme', theme);
		document.querySelector('html').setAttribute('data-theme', theme);
	}, [theme]);

	const navLinks = (
		<>
			<li>
				<NavLink
					className={({ isActive }) => (isActive ? 'font-bold' : '')}
					to={'/'}
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					className={({ isActive }) => (isActive ? 'font-bold' : '')}
					to={'/addProduct'}
				>
					Add Product
				</NavLink>
			</li>
			<li>
				<NavLink
					className={({ isActive }) => (isActive ? 'font-bold' : '')}
					to={'/cart'}
				>
					Cart
				</NavLink>
			</li>
			{!user && (
				<li>
					<NavLink
						className={({ isActive }) => (isActive ? 'font-bold' : '')}
						to={'/login'}
					>
						Login
					</NavLink>
				</li>
			)}
		</>
	);

	return (
		<div className="bg-base-200">
			<nav className="navbar container">
				<div className="navbar-start">
					<a href="/" className="flex items-center">
						<img
							src="https://i.ibb.co/LPv0gD7/digidynamo-Logo.png"
							className="h-8 mr-3"
							alt="Flowbite Logo"
						/>
						<span className="self-center md:text-2xl font-semibold whitespace-nowrap  ">
							Digital Dynamo
						</span>
					</a>
				</div>

				<div className="navbar-center hidden lg:flex">
					<ul className="flex gap-10 px-1">{navLinks}</ul>
				</div>
				<div className="navbar-end gap-1 md:gap-2">
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<Icon icon="ri:menu-3-fill" width={'20'} />
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100  rounded-box w-52"
						>
							{navLinks}
						</ul>
					</div>
					<button onClick={handleThemeChange}>
						<label
							className={`swap ${
								theme === 'garden' ? '' : 'swap-active'
							} swap-rotate`}
						>
							<Icon icon="noto:sun" className="swap-on" width={30} />
							<Icon
								icon="streamline-emojis:new-moon"
								className="swap-off"
								width={30}
							/>
						</label>
					</button>
					{user && (
						<div className="dropdown dropdown-end">
							<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
								<div className="w-10 rounded-full">
									<img src={user.photoURL || userDefault} />
								</div>
							</label>
							<div>
								<ul
									tabIndex={0}
									className="menu menu-sm dropdown-content mt-3 z-30 p-2 shadow bg-base-100 rounded-box w-52"
								>
									<li>
										<a className="justify-between">
											{user?.displayName || 'Profile'}
										</a>
									</li>
									<li>
										<a>Settings</a>
									</li>
									<li>
										<a onClick={handleLogout}>Logout</a>
									</li>
								</ul>
							</div>
						</div>
					)}
				</div>
			</nav>
		</div>
	);
};

export default Header;
