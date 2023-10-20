import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import userDefault from '/user.svg';
import Logo from '../Logo/Logo';

const Header = () => {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
	const { user, logOut } = useAuth();

	const handleThemeChange = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
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
		if (theme === 'dark') {
			document.querySelector('html').classList.remove('light');
			document.querySelector('html').classList.add('dark');
		} else {
			document.querySelector('html').classList.remove('dark');
			document.querySelector('html').classList.add('light');
		}
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
		<div className=" sticky inset-0 z-20 bg-gray-300  bg-opacity-80 dark:bg-gray-800 text-zinc-800 dark:text-zinc-300">
			<nav className="navbar container">
				<div className="navbar-start">
					<Logo />
				</div>

				<div className="navbar-center hidden lg:flex">
					<ul className="flex gap-10 px-1">{navLinks}</ul>
				</div>
				<div className="navbar-end items-center gap-1 md:gap-2">
					<div className="dropdown dropdown-end">
						<label
							tabIndex={0}
							className="btn border-transparent hover:bg-gray-300 dark:hover:bg-gray-900 hover:border-transparent lg:hidden dark:text-zinc-300"
						>
							<Icon icon="ri:menu-3-fill" width={'20'} />
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-gray-100 dark:bg-gray-800 dark:text-zinc-300 rounded-box w-52"
						>
							{navLinks}
						</ul>
					</div>
					<button onClick={handleThemeChange}>
						<label
							className={`swap ${
								theme === 'light' ? '' : 'swap-active'
							} swap-rotate`}
						>
							<Icon
								icon="noto:sun"
								className="swap-on"
								width={32}
								height={32}
							/>
							<Icon
								icon="streamline-emojis:new-moon"
								className="swap-off"
								width={32}
								height={32}
							/>
						</label>
					</button>
					{user && (
						<div className="dropdown dropdown-end">
							<label
								tabIndex={0}
								className="btn btn-ghost btn-circle border-2 hover:border-zinc-400 dark:hover:border-gray-700 avatar"
							>
								<div className="w-8 rounded-full">
									<img src={user.photoURL || userDefault} />
								</div>
							</label>
							<div>
								<ul
									tabIndex={0}
									className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-gray-100 text-zinc-800 dark:bg-gray-800 dark:text-zinc-300 rounded-box w-52 "
								>
									<li>
										<NavLink
											to={`/profile/${user?.email}`}
											className={({ isActive }) =>
												isActive ? 'font-bold' : ''
											}
										>
											{user?.displayName || 'Profile'}
										</NavLink>
									</li>
									<li>
										<div onClick={handleLogout}>Logout</div>
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
