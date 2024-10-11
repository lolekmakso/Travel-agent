import Swiper from "swiper/bundle";
import "swiper/css/bundle";
function swiperFunc() {
  const swiper = new Swiper("#swiper-popular", {
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 32,

    navigation: {
      nextEl: "#sliderNext",
      prevEl: "#sliderPrev",
    },

    breakpoints: {
			425: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
      600: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			900: {
				slidesPerView: 4,
				spaceBetween: 40,
			}
		},
  });
}

export default swiperFunc;
