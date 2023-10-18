import './Banner.css';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

const HomeBanner = () => {
	const banners = [
		'https://i.ibb.co/2FbfFpc/banner1.png',
		'https://i.ibb.co/c8yHSxC/banner2.png',
		'https://i.ibb.co/Y3p8jFW/banner3.png',
	];
	return (
		<swiper-container
			className="mySwiper"
			space-between="30"
			centered-slides="true"
			pagination="true"
			pagination-dynamic-bullets="true"
			autoplay-delay="2500"
			autoplay-disable-on-interaction="false"
		>
			{banners.map(bnr => {
				return (
					<swiper-slide key={bnr}>
						<img src={bnr} alt="" />
					</swiper-slide>
				);
			})}
		</swiper-container>
	);
};

export default HomeBanner;
