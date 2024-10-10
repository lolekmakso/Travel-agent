import Swiper from "swiper/bundle";
import "swiper/css/bundle";
function swiperTestimonials() {
  const swiper = new Swiper("#testimonials-col-1", {
    direction: 'vertical',
    slidesPerView: 'auto',
    spaceBetween: 32,
    grabCursor: true,
		a11y: false,
		freeMode: true,
		speed: 8000,
		loop: true,
		autoplay: {
			delay: 0.0,
			disableOnInteraction: false,
		},
  });

  const swiper2 = new Swiper("#testimonials-col-2", {
    direction: 'vertical',
    slidesPerView: 'auto',
    spaceBetween: 32,
    grabCursor: true,
		a11y: false,
		freeMode: true,
		speed: 8000,
		loop: true,
		autoplay: {
			delay: 0.0,
			disableOnInteraction: false,
      reverseDirection: true
		},
  });

  const swiper3 = new Swiper("#testimonials-col-3", {
    direction: 'vertical',
    slidesPerView: 'auto',
    spaceBetween: 32,
    grabCursor: true,
		a11y: false,
		freeMode: true,
		speed: 8000,
		loop: true,
		autoplay: {
			delay: 0.0,
			disableOnInteraction: false,
		},
  });
}

export default swiperTestimonials;
