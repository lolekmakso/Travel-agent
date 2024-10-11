import Swiper from "swiper/bundle";
import "swiper/css/bundle";
function swiperTestimonials() {
  const swiper = new Swiper("#testimonials-col-1", {
    direction: 'horizontal',
    slidesPerView: '1',
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

		breakpoints: {
			425: {
                slidesPerView: '1.5',
			},
			768: {
                slidesPerView: '2',
			},
			1025: {
				direction: 'vertical',
                slidesPerView: 'auto',
			}
		},
  });

  const swiper2 = new Swiper("#testimonials-col-2", {
    direction: 'horizontal',
    slidesPerView: '1',
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

		breakpoints: {
			425: {
                slidesPerView: '1.5',
			},
			768: {
                slidesPerView: '2',
			},
			1025: {
				direction: 'vertical',
                slidesPerView: 'auto',
			}
		},
  });

  const swiper3 = new Swiper("#testimonials-col-3", {
    direction: 'horizontal',
    slidesPerView: '1',
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

		breakpoints: {
			425: {
                slidesPerView: '1.5',
			},
			768: {
                slidesPerView: '2',
			},
			1025: {
				direction: 'vertical',
                slidesPerView: 'auto',
			}
		},
  });
}

export default swiperTestimonials;
