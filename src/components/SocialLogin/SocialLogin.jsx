import { Icon } from '@iconify/react';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
const SocialLogin = () => {
	const { googleLogin } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const handleGoogleLogin = async () => {
		await googleLogin().then(async res => {
			navigate(location.state || '/');
			const user = {
				displayName: res.user.displayName,
				email: res.user.email,
				uid: res.user.uid,
			};
			const response = await axios
				.get(
					`https://digital-dynamo-server.vercel.app/api/user/${res.user.uid}`
				)
				.catch(err => console.log(err));
			if (!response?.data?.acknowledged) {
				const response = await axios
					.post('https://digital-dynamo-server.vercel.app/api/user', user, {
						headers: { 'Content-Type': 'application/json' },
					})
					.catch(err => console.log(err));
				console.log(response?.data);
			}
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
