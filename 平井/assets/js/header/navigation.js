console.log('navigation.js');

// .js-sanmple__header-buttonを取得する
const headerButton = document.querySelector('.js-sanmple__header-button');
// headerButtonにクリックイベントを設定する
headerButton.addEventListener('click', () => {
    // .js-sanmple__header-buttonにjs-sanmple__header-button-activeクラスを付与する
    headerButton.classList.toggle('js-sanmple__header-button-active');
    // .p-sanmple__header-navにjs-sanmple__header-nav-activeクラスを付与する
    document.querySelector('.p-sanmple__header-nav').classList.toggle('js-sanmple__header-nav-active');
});