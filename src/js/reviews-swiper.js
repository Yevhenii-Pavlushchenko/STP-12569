import Swiper from 'swiper';
import { Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const reviewsSwiper = new Swiper('.reviews-swiper', {
  modules: [Pagination, Navigation, Mousewheel, Keyboard],
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,

  breakpoints: {
    1440: {
      slidesPerView: 3,
      spaceBetween: 60,
      centeredSlides: false,
    },
  },

  pagination: {
    el: '.reviews-pagination',
    clickable: true,
    bulletClass: 'reviews-bullet',
    bulletActiveClass: 'reviews-bullet-active',
  },

  navigation: {
    nextEl: '.reviews-next',
    prevEl: '.reviews-prev',
  },

  keyboard: { enabled: true },
  mousewheel: { forceToAxis: true },
});
