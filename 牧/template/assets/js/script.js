$(document).ready(function() {
  //ハンバーガーメニュー
  $(".js-header__hamburger").click(function () {
    $(this).toggleClass('active');
    $(".js-header__nav").toggle();
});

  //スライダー
  $('.js-menu__list').slick({
    dots: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
});