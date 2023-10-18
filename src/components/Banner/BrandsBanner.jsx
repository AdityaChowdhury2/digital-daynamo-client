import './Banner.css';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
const BrandsBanner = () => {
	return (
		<div className="h-32 md:h-52 lg:h-96">
			<swiper-container
				class="mySwiper"
				pagination="true"
				pagination-clickable="true"
				space-between="30"
				effect="fade"
				autoplay-delay="2500"
				autoplay-disable-on-interaction="false"
			>
				<swiper-slide>
					<img
						src="https://i.ibb.co/2FbfFpc/banner1.png"
						alt=""
						className="h-full"
					/>
				</swiper-slide>
				<swiper-slide>
					<img
						src="https://i.ibb.co/c8yHSxC/banner2.png"
						alt=""
						className="h-full"
					/>
				</swiper-slide>
				<swiper-slide>
					<img
						src="https://i.ibb.co/Y3p8jFW/banner3.png"
						alt=""
						className="h-full"
					/>
				</swiper-slide>
			</swiper-container>
		</div>
	);
};

export default BrandsBanner;
