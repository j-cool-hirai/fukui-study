/* $(".l-header__btn").click(function () {
    $(this).toggleClass('active');
});
 */
const ham = $('.l-header__btn');
const nav = $('.l-header__nav');
ham.on('click', function () { //ハンバーガーメニューをクリックしたら
  ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
  nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
});

