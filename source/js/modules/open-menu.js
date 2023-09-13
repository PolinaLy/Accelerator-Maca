const header = document.querySelector('header');
const menuWrapperToggle = document.querySelector('.menu__wrapper-toggle');
const body = document.querySelector('body');
const linkHeader = document.querySelectorAll('.menu a');

function trapFocus(element) {
  const focusableEls = document.querySelectorAll('header a[href]:not([disabled]), .menu__toggle');
  const firstFocusableEl = focusableEls[0];
  const lastFocusableEl = focusableEls[focusableEls.length - 1];
  const KEYCODE_TAB = 9;

  element.addEventListener('keydown', function (e) {
    const isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);

    if (!isTabPressed) {
      return;
    } else if (document.activeElement === lastFocusableEl) {
      firstFocusableEl.focus();
      e.preventDefault();
    }
  });
}

const headerOutsideClick = (evt) => {
  if ((evt.target === menuWrapperToggle) || (evt.target === header && evt.target.closest !== 'menu-header') || (evt.target === document.querySelector('header .container') && evt.target.closest !== 'menu-header')) {
    header.classList.remove('open-menu');
    body.style.position = 'inherit';
  }
};

if (document.querySelector('.menu') && menuWrapperToggle) {
  menuWrapperToggle.addEventListener('click', function () {
    header.classList.toggle('open-menu');

    if (header.classList.contains('open-menu')) {
      body.style.position = 'fixed';

      trapFocus(header);
      header.addEventListener('click', headerOutsideClick);

      header.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' || e.keyCode === 27) {
          header.classList.remove('open-menu');
          body.style.position = 'inherit';
        }
      });

      linkHeader.forEach((el) => {
        if (el.getAttribute('href') !== '#') {
          el.addEventListener('click', () => {
            header.classList.remove('open-menu');
            body.style.position = 'inherit';
          });
        }
      });
    } else {
      body.style.position = 'inherit';
    }
  });
}
