const swiper = new Swiper(".swiper", {
    loop: true,
    // 画像の枚数
    slidesPerView: 4,
    // 画像の間隔
    spaceBetween: 20,
    // ページネーション
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // 前後の矢印
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });