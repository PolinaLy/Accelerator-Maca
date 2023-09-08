const menuLink = document.querySelectorAll('.menu-header a');

if (menuLink) {
  menuLink.forEach((el) => {
    if ((el.getAttribute('href') === '#') && (el.getAttribute('class') === 'menu__sub-nav')) {
      el.addEventListener('click', () => {
        el.classList.toggle('is-active');
        el.classList.toggle('menu__sub-nav--open');
      });
    }
  });
}
