import { Icon } from '@iconify/react';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
	const { googleLogin } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const handleGoogleLogin = () => {
		googleLogin().then(res => {
			console.log(res.user);
			navigate(location.state || '/');
		});
	};
	return (
		<div>
			<button
				onClick={handleGoogleLogin}
				className="w-full flex items-center justify-center bg-base-200 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 gap-2 hover:bg-base-300"
			>
				<Icon icon="flat-color-icons:google" />
				Google
			</button>
		</div>
	);
};

export default SocialLogin;
