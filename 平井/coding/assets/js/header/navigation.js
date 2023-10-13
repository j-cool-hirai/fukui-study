// .js-sample__header-buttonを取得する
const headerButton = document.querySelector('.js-sample__header-button');
// headerButtonにクリックイベントを設定する
headerButton.addEventListener('click', () => {
    // .js-sample__header-buttonにjs-sample__header-button-activeクラスを付与する
    headerButton.classList.toggle('js-sample__header-button-active');
    // .p-sample__header-navにjs-sample__header-nav-activeクラスを付与する
    document.querySelector('.l-header__nav').classList.toggle('js-sample__header-nav-active');

        // 現在のスクロール量を取得
    const scrollY = window.scrollY;
    // bodyタグにu-fixedクラスを付与する
    document.body.classList.toggle("u-fixed");

        // bodyタグに.u-fixedが付与されている場合
    if (document.body.classList.contains("u-fixed")) {
      // 現在のブラウザの横幅を取得
      const width = window.innerWidth;
      // bodyタグにstyleでwidthの値を設定する
      document.body.style.width = width + "px";
      // bodyタグにstyleでtopの値を設定する
      document.body.style.top = "-" + scrollY + "px";
    } else {
      // 保存したスクロール量を取得
      const scrollY_Retention = Math.abs(
        parseInt(document.body.style.top)
      );

      // bodyタグにstyleでwidthの値を削除する
      document.body.style.width = "";
      // bodyタグにstyleでtopの値を削除する
      document.body.style.top = "";
      // 現在のスクロール量を設定する
      window.scrollTo(0, scrollY_Retention);
    }
});