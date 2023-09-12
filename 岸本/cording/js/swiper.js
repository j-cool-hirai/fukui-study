const swiper = new Swiper(".swiper", {
    /* autoplay: true, */
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true, // クリック有効化
    }
});