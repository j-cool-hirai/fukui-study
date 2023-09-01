document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.js-hambButton');
  const header = document.querySelector('.l-header');

  const checkState = (state) => {
    state === 'open'
      ? (header.dataset.hamb = 'close')
      : (header.dataset.hamb = 'open');
  };

  hamburgerButton?.addEventListener('click', () => {
    let menuState = header.dataset.hamb;
    checkState(menuState);
    document.body.classList.toggle('js_notHidden');
  });

  const hambLinks = document.querySelectorAll('.l-header__link');

  hambLinks.forEach((link) => {
    link.addEventListener('click', () => {
      header.dataset.hamb = 'close';
      document.body.classList.remove('js_notHidden');
    });
  });
});
