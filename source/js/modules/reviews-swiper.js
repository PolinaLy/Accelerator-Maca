export const initReviewsSwiper = function () {

  new Swiper(".reviews__swiper", {
    navigation: {
      nextEl: '.reviews__swiper .slider-button--next',
      prevEl: '.reviews__swiper .slider-button--prev',
    },

    scrollbar: {
      el: '.reviews__swiper-scrollbar',
    },

    slidesPerView: 'auto',

    breakpoints: {
      320: {
        loop: false,
      },
      768: {
        loop: false,
        spaceBetween: 30,
      },
      1200: {
        spaceBetween: 32,
      },
    },
  });
};
