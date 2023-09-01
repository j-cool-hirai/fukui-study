// 固定ヘッダーの高さ（＋余白の追加）
const headerHeight = document.querySelector('header').offsetHeight + 20;

// イージング関数（easeOutExpo）
function scrollToPos(position) {
  const startPos = window.scrollY;
  const distance = Math.min(
    position - startPos,
    document.documentElement.scrollHeight - window.innerHeight - startPos
  );
  const duration = 800; // スクロールにかかる時間（ミリ秒）

  let startTime;

  function easeOutExpo(t, b, c, d) {
    return (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b;
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
        const position =
          target.getBoundingClientRect().top + window.scrollY - headerHeight;
        scrollToPos(position);

        // URLをアンカーで更新する
        history.pushState(null, null, hash);
      }
    }
  });
}

// 別ページ遷移後にスムーススクロール
const hash = window.location.hash;
if (hash) {
  const target = document.getElementById(hash.slice(1));
  if (target) {
    // 遅延読み込み解除
    removeLazyLoad();
    window.addEventListener('load', () => {
      const position =
        target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo(0, 0);
      scrollToPos(position);
    });
  }
}
