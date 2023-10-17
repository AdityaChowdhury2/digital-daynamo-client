import { Icon } from '@iconify/react';
const SocialLogin = () => {
	return (
		<div>
			<button className="w-full flex items-center justify-center bg-base-200 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 gap-2 hover:bg-base-300">
				<Icon icon="flat-color-icons:google" />
				Google
			</button>
		</div>
	);
};

export default SocialLogin;
