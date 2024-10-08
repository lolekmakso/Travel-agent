// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

// import autoCompleteFunc from "./modules/autoComplete";
// autoCompleteFunc()

// import easepickFun from "./modules/easepick";
// easepickFun ()

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 32,

  
    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },
  });