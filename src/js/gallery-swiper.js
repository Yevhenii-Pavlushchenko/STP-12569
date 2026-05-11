import Swiper from 'swiper';
import { Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const gallerySwiper = new Swiper('.gallery-swiper', {
  modules: [Pagination, Navigation, Mousewheel, Keyboard],
  centeredSlides: true,
  loop: true,

  // Уходим от auto на фиксированное число
  slidesPerView: 1,
  spaceBetween: 80,

  // Параметры для стабильности loop
  loopedSlides: 5,

  breakpoints: {
    1440: {
      slidesPerView: 3, // Жестко 3 слайда: центр + 2 боковых
      spaceBetween: 90, // Гэп как по макету
    },
  },

  pagination: {
    el: '.gallery-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.gallery-next',
    prevEl: '.gallery-prev',
  },

  keyboard: { enabled: true },
  mousewheel: { forceToAxis: true },

  // Убираем лишние апдейты, если они не помогают
  observer: true,
  observeParents: true,
});
