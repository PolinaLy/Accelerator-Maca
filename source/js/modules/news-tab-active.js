const newsBtns = document.querySelector('.news-materials__buttons');
const newsBtn = document.querySelectorAll('.news-materials__buttons button');

if (newsBtns) {
  newsBtns.addEventListener('click', (evt) => {
    newsBtn.forEach((el) => {
      if (el.classList.contains('is-active')) {
        el.classList.remove('is-active');
      }
    });

    evt.target.classList.add('is-active');
  });
}
