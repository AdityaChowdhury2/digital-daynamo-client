import { Icon } from '@iconify/react';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
const SocialLogin = () => {
	const { googleLogin } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const handleGoogleLogin = () => {
		googleLogin().then(res => {
			navigate(location.state || '/');
			// console.log(res.user);
			// console.log(res.user.uid);
			const user = {
				displayName: res.user?.displayName,
				email: res.user?.email,
				uid: res.user?.uid,
			};
			const url = `http://localhost:5000/api/v1/user/${user.uid}`;
			console.log(url);
			axios
				.put(url, user)
				.then(response => console.log(response?.data))
				.catch(err => console.log(err));
		});
	};
	return (
		<div>
			<button
				onClick={handleGoogleLogin}
				className="w-full flex items-center justify-center  font-medium  text-sm px-5 py-2.5 gap-2  dark:bg-gray-600 bg-zinc-300 hover:bg-zinc-400 border-0 dark:hover:bg-gray-700 focus:outline-none  rounded "
			>
				<Icon icon="flat-color-icons:google" />
				Google
			</button>
		</div>
	);
};

export default SocialLogin;
