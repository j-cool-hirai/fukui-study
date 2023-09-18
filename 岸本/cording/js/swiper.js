const swiper = new Swiper(".swiper", {
    autoplay: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true, // クリック有効化
    },
    slidesPerView: 1,
    spaceBetween: 20, 
    breakpoints: {
      // スライドの表示枚数：500px以上の場合
      550: {
        slidesPerView: 2,
      },
      850: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 4,
      },
    }
});