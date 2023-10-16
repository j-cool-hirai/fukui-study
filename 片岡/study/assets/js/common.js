//************ hamburger ************//
$(".js-hamburger").click(function () {
	$(this).toggleClass('active');
    $("#js-nav").toggleClass('panelactive');
});

$("#js-nav a").click(function () {
    $(".js-hamburger").removeClass('active');
    $("#js-nav").removeClass('panelactive');
});
//************ hamburger ************//

//************ slider ************//
$('.js-slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 4,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
    responsive: [
        {
        breakpoint: 769,//モニターの横幅が769px以下の見せ方
        settings: {
            slidesToShow: 2,//スライドを画面に2枚見せる
            slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
        }
    },
    {
        breakpoint: 426,//モニターの横幅が426px以下の見せ方
        settings: {
            slidesToShow: 1,//スライドを画面に1枚見せる
            slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
        }
    }
]
});
//************ slider ************//
//************ page top ************//
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 200){
		$('#js-page__top').removeClass('DownMove');
		$('#js-page__top').addClass('UpMove');
	}else{
		if($('#js-page__top').hasClass('UpMove')){
			$('#js-page__top').removeClass('UpMove');
			$('#js-page__top').addClass('DownMove');
		}
	}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopAnime();
});
$(window).on('load', function () {
	PageTopAnime();
});

$('#js-page__top a').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});
//************ page top ************//