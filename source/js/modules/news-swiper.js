export const initNewsSwiper = function () {
  document.querySelectorAll('.news-materials__swiper-slide')[0].classList.add('news-materials__first-slide');
  if (document.documentElement.clientWidth < 1200) {
    document.querySelectorAll('.news-materials__swiper-slide')[0].classList.remove('news-materials__first-slide');
  }

  new Swiper(".news-materials__swiper", {
    loop: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        grid: {
          rows: 2,
        },
        spaceBetween: 20,
      },
      768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
      spaceBetween: 30,
      },
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 32,
      },
    },

    navigation: {
      nextEl: '.news-materials__swiper .slider-button--next',
      prevEl: '.news-materials__swiper .slider-button--prev',
    },

    pagination: {
      el: '.news-materials__swiper-pagination',
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  });
};
