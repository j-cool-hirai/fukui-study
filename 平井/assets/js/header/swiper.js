// const swiper = new Swiper(".swiper", {
//     slidesPerView: 4,
//     spaceBetween: 20,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       type: "bullets", // ページネーションの種類を指定
//     },
//     // 前後の矢印
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
// });

// .myswiper-wrapperを持つ要素を全て取得
const sampleSwiper = document.querySelectorAll(".p-sample__menu-swiper");
console.log(sampleSwiper);

sampleSwiper.each(function (index, el) {
    const swiper = new Swiper(el.querySelector(".swiper"), {
      pagination: {
        el: el.querySelector(".swiper-pagination")
      },
      navigation: {
        nextEl: el.querySelector(".swiper-button-next"),
        prevEl: el.querySelector(".swiper-button-prev")
      }
    });
});
