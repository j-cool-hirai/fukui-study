document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.js-hamburger');
    const hamburgerNav = document.querySelector('.l-header__inner');
    hamburgerBtn.addEventListener('click', function() {
        hamburgerBtn.classList.toggle('is-active');
        hamburgerNav.classList.toggle('is-active');
    }, false);
},false);