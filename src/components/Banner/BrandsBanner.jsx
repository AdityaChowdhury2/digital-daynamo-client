import PropTypes from 'prop-types';
import './Banner.css';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
const BrandsBanner = ({ banners }) => {
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
				{banners.map((banner, idx) => (
					<swiper-slide key={idx}>
						<img src={banner} alt="" className="h-full" />
					</swiper-slide>
				))}
			</swiper-container>
		</div>
	);
};

BrandsBanner.propTypes = {
	banners: PropTypes.array,
};

export default BrandsBanner;
