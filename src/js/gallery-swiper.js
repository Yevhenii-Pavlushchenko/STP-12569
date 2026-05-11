import Swiper from 'swiper';
import { Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const gallerySwiper = new Swiper('.gallery-swiper', {
  modules: [Pagination, Navigation, Mousewheel, Keyboard],
  centeredSlides: true,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 80,
  loopedSlides: 5,

  breakpoints: {
    1440: {
      slidesPerView: 3,
      spaceBetween: 90,
    },
  },

  pagination: {
    el: '.gallery-pagination',
    clickable: true,
    modifierClass: 'gallery-pagination-',
    bulletClass: 'gallery-bullet',
    bulletActiveClass: 'gallery-bullet-active',
  },

  navigation: {
    nextEl: '.gallery-next',
    prevEl: '.gallery-prev',
  },

  keyboard: { enabled: true },
  mousewheel: { forceToAxis: true },

  observer: true,
  observeParents: true,
});
