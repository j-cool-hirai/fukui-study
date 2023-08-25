// .js-sample__header-buttonを取得する
const headerButton = document.querySelector('.js-sample__header-button');
// headerButtonにクリックイベントを設定する
headerButton.addEventListener('click', () => {
    // .js-sample__header-buttonにjs-sample__header-button-activeクラスを付与する
    headerButton.classList.toggle('js-sample__header-button-active');
    // .p-sample__header-navにjs-sample__header-nav-activeクラスを付与する
    document.querySelector('.p-sample__header-nav').classList.toggle('js-sample__header-nav-active');
});