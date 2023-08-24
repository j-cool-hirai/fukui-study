document.addEventListener('DOMContentLoaded', function() {
  const hamburgerCheckbox = document.getElementById('hamburger');
  const hamburgerListWrap = document.querySelector('.p-global-nav__wrap');
  const navLinks = document.querySelectorAll('.p-global-nav__link');

  // ナビゲーションリンクがクリックされたらメニューを閉じる
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburgerCheckbox.checked = false;
      hamburgerListWrap.classList.remove('active');
    });
  });

  // スムーススクロールの実装
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});
  

// スクロールトップボタン
const pageTopBtn = document.getElementById('js-scroll-top');

window.addEventListener("scroll", () => {
  const currentY = window.pageYOffset;
  if ( currentY > 100){
    setTimeout(function(){
      pageTopBtn.style.opacity = 1;
    }, 1);
    pageTopBtn.classList.remove('is-hide');
  } else {
    setTimeout(function(){
      pageTopBtn.style.opacity = 0;
    }, 1);
    pageTopBtn.classList.add('is-hide');
  }
});

// スクロールトップボタン
scrollTop('js-scroll-top', 150); // 遅すぎるとガクガクになるので注意

function scrollTop(el, duration) {
  const target = document.getElementById(el);
  target.addEventListener('click', function() {
    let currentY = window.pageYOffset; // 現在のスクロール位置を取得
    let step = duration/currentY > 1 ? 10 : 100; // 三項演算子
    let timeStep = duration/currentY * step; // スクロール時間
    let intervalId = setInterval(scrollUp, timeStep);
    // timeStepの間隔でscrollUpを繰り返す。
    // clearItervalのために返り値intervalIdを定義する。

    function scrollUp(){
      currentY = window.pageYOffset;
      if(currentY === 0) {
          clearInterval(intervalId); // ページ最上部に来たら終了
      } else {
          scrollBy( 0, -step ); // step分上へスクロール
      }
    }
  });
}