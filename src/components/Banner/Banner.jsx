import './Banner.css';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
const Banner = () => {
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
			<swiper-slide>
				<img src="https://i.ibb.co/2FbfFpc/banner1.png" alt="" />
			</swiper-slide>
			<swiper-slide>
				<img src="https://i.ibb.co/c8yHSxC/banner2.png" alt="" />
			</swiper-slide>
			<swiper-slide>
				<img src="https://i.ibb.co/Y3p8jFW/banner3.png" alt="" />
			</swiper-slide>
		</swiper-container>
	);
};

export default Banner;
