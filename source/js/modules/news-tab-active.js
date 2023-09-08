const newsBtns = document.querySelector('.news-materials__buttons');
const newsBtn = document.querySelectorAll('.news-materials__buttons button');

newsBtns.addEventListener('click', (evt) => {
  newsBtn.forEach((el) => {
    if (el.classList.contains('is-active')) {
      el.classList.remove('is-active');
    }
  });

  if (window.innerWidth < 768) {
    let width = 0;
    for (let i = 0; i < newsBtn.length; i++) {
      if ((newsBtn[i] === evt.target)) {
        if (i === newsBtn.length - 1) {
          newsBtns.style.marginLeft = '0px';
        } else {
          newsBtns.style.marginLeft = `${-(width + i * 8)}px`;
        }
      }
      width += newsBtn[i].offsetWidth;
    }
  }

  evt.target.classList.add('is-active');
});
