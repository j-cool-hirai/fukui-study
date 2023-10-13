document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.js-hamburger');
    const hamburgerNav = document.querySelector('.l-header__inner');
    hamburgerBtn.addEventListener('click', function() {
        hamburgerBtn.classList.toggle('is-active');
        hamburgerNav.classList.toggle('is-active');
    }, false);
},false);

const swiper = new Swiper('.js-menu__slider', {
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 4,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
    },
})