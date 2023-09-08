export const initHeroSwiper = function () {

  new Swiper(".hero__swiper", {
    loop: true,

    autoplay: {
      delay: 3000,
    },

    pagination: {
      el: '.hero__swiper-pagination',
      clickable: true,
    },

    on: {
      slideChange: function () {
        const pag = document.querySelector('.hero__swiper-pagination');
        const index_currentSlide = this.realIndex;
        const currentSlide = this.slides[index_currentSlide + 1];
        let heroContentHight = currentSlide.querySelector('.hero__content').clientHeight;
        if (window.screen.width > 767) {
          pag.style.bottom = `${heroContentHight + 60}px`;
        } else {
          pag.style.bottom = `${heroContentHight + 20}px`;
        }
      },
    },
  });

  const paginations = document.querySelectorAll('.hero__swiper-pagination .swiper-pagination-bullet');
    document.addEventListener('keydown', (e) => {
      if ((e.key === 'Space') || (e.keyCode === 32)) {
        e.preventDefault();
        if (paginations[0].classList.contains('swiper-pagination-bullet-active')) {
          paginations[1].click();
        } else if (paginations[1].classList.contains('swiper-pagination-bullet-active')) {
          paginations[2].click();
        } else if (paginations[2].classList.contains('swiper-pagination-bullet-active')) {
          paginations[0].click();
        } else {
          return;
        }
      }
    });
};
