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

// 固定ヘッダーの高さ（＋余白の追加）
const headerHeight = document.querySelector('header').offsetHeight + 20;

// イージング関数（easeOutExpo）
function scrollToPos(position) {
  const startPos = window.scrollY;
  const distance = Math.min(position - startPos, document.documentElement.scrollHeight - window.innerHeight - startPos);
  const duration = 800; // スクロールにかかる時間（ミリ秒）

  let startTime;

  function easeOutExpo(t, b, c, d) {
    return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
  }

  function animation(currentTime) {
    if (startTime === undefined) {
      startTime = currentTime;
    }
    const timeElapsed = currentTime - startTime;
    const scrollPos = easeOutExpo(timeElapsed, startPos, distance, duration);
    window.scrollTo(0, scrollPos);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      window.scrollTo(0, position);
    }
  }

  requestAnimationFrame(animation);
}

// LazyLoad対策（遅延読み込み解除）
function removeLazyLoad() {
  const targets = document.querySelectorAll('[data-src]');
  for (const target of targets) {
    target.addEventListener('load', () => {
      target.removeAttribute('data-src');
    });
    target.setAttribute('src', target.getAttribute('data-src'));
  }
}

// ページ内リンクのスムーススクロール
for (const link of document.querySelectorAll('a[href*="#"]')) {
  link.addEventListener('click', (e) => {
    const hash = e.currentTarget.hash;
    
    // "#"と"#top"の時（ページトップへスクロール）
    if (!hash || hash === '#top') {
      e.preventDefault();
      scrollToPos(1); // iOSのChromeでfixedされた固定ヘッダーなどが動くバグがあるため0ではなく1に
      
    // それ以外の時（アンカーへスクロール）
    } else {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        e.preventDefault();
        // 遅延読み込み解除
        removeLazyLoad();
        const position = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        scrollToPos(position);

        // URLをアンカーで更新する
        history.pushState(null, null, hash);
      }
    }
  });
};

// 別ページ遷移後にスムーススクロール
const hash = window.location.hash;
if (hash) {
  const target = document.getElementById(hash.slice(1));
  if (target) {
    // 遅延読み込み解除
    removeLazyLoad();
    window.addEventListener("load", () => {
      const position = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo(0, 0);
      scrollToPos(position);
    });
  }
}

const options = {
  perPage: 4, // 一度に表示するアイテム数
  pagination: true, // ページネーションを有効にする
  gap: 16,
  updateOnMove: true,
  type: 'loop',
  classes: {
    // ページネーション関連のクラスを追加したい場合
    pagination: "splide__pagination your-class-pagination", // コンテナ要素
    page: "splide__pagination__page your-class-page", // ページネーションのボタン要素
  },
  mediaQuery: "max", 
  breakpoints: {
    768: {
      perPage: 2,
      heightRatio: 1,
    },
    378: {
      perPage: 1,
      heightRatio: 1,
    },
  },
}

const splide = new Splide( '.splide',options );
splide.mount();






