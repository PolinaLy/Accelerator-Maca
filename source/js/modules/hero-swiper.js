export const initHeroSwiper = function () {
  if (document.querySelector('.hero__swiper')) {
    const sliderHeroImg = document.querySelector('[data-slider="hero-images"]');
    const sliderHeroContent = document.querySelector('[data-slider="hero-content"]');
    const pagination = sliderHeroContent.querySelector('[data-slider="hero-bullets"]');

    const swiperHeroImg = new window.Swiper(sliderHeroImg, {
      slidesPerView: 1,
      loop: true,

      autoplay: {
        delay: 3000,
      },

      breakpoints: {
        1200: {
          allowTouchMove: false,
        },
      },
    });

    const swiperHeroContent = new window.Swiper(sliderHeroContent, {
      slidesPerView: 1,
      loop: true,
      effect: 'fade',
      autoHeight: true,

      fadeEffect: {
        crossFade: true,
      },
      pagination: {
        el: pagination,
        clickable: true,
        bulletActiveClass: 'is-active',
        bulletClass: 'hero__pagination-btn',
        renderBullet(index, className) {
          return '<button class="' + className + '" type="button" aria-label="Слайд ' + (index + 1) + '"></button>';
        },
      },

      breakpoints: {
        1200: {
          allowTouchMove: false,
        },
      },
    });

    const paginations = document.querySelectorAll('.hero__pagination .hero__pagination-btn');
    document.addEventListener('keydown', (e) => {
      if ((e.key === 'Space') || (e.keyCode === 32)) {
        e.preventDefault();
        if (paginations[0].classList.contains('is-active')) {
          paginations[1].click();
        } else if (paginations[1].classList.contains('is-active')) {
          paginations[2].click();
        } else if (paginations[2].classList.contains('is-active')) {
          paginations[0].click();
        } else {
          return;
        }
      }
    });

    swiperHeroImg.controller.control = swiperHeroContent;
    swiperHeroContent.controller.control = swiperHeroImg;
  }
};
