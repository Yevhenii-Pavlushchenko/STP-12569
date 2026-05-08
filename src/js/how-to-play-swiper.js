import Swiper from 'swiper';
import { Pagination, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const slidesData = [
  {
    title: 'Enter the Arena',
    text: 'Start each run in a confined space filled with incoming enemies.',
  },
  {
    title: 'Control Movement',
    text: 'Dodge attacks and reposition constantly to stay alive.',
  },
  {
    title: 'Attack Automatically',
    text: 'Weapons fire continuously, allowing focus on movement and strategy.',
  },
  {
    title: 'Choose Upgrades',
    text: 'Select power-ups during the run to enhance abilities.',
  },
  {
    title: 'Last Longer',
    text: 'Survive waves to reach higher difficulty levels',
  },
];

const swiper = new Swiper('.how-to-play-swiper', {
  modules: [Pagination],
  direction: 'vertical', // Вертикальное направление
  slidesPerView: 3, // Видим 3 слайда (активный по центру)
  centeredSlides: true, // Активный слайд всегда в центре
  spaceBetween: 8, // Расстояние между слайдами
  loop: true, // Бесконечная прокрутка

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  on: {
    slideChange: function () {
      const titleEl = document.querySelector('.info-title');
      const textEl = document.querySelector('.info-text');

      const currentIndex = this.realIndex;

      if (slidesData[currentIndex]) {
        titleEl.textContent = slidesData[currentIndex].title;
        textEl.textContent = slidesData[currentIndex].text;
      }
    },
  },
});
