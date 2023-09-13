export const initProgramsSwiper = function () {
  new Swiper(".programs__swiper", {

    navigation: {
      nextEl: '.programs__swiper .slider-button--next',
      prevEl: '.programs__swiper .slider-button--prev',
    },

    scrollbar: {
      el: '.programs__swiper-scrollbar',
    },

    slidesPerView: 'auto',

    breakpoints: {
      320: {
        spaceBetween: 20,
      },
      768: {
        spaceBetween: 30,
      },
      1200: {
        spaceBetween: 32,
      },
    },
  });
};
