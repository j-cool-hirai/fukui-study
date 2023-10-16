import VueSmoothScroll from "vue3-smooth-scroll";

export default defineNuxtPlugin((nuxtApp) => {
  // オプションの設定
  const config = {
    duration: 500,
    offset: 70,
    updateHistory: true,
    easingFunction: null,
    hash: false,
  };

  // VueSmoothScroll を Vue アプリケーションに適用する
  nuxtApp.vueApp.use(VueSmoothScroll, config);

  // コンポーネントで smooth-scroll ディレクティブを使用する
  nuxtApp.vueApp.component("smooth-scroll", VueSmoothScroll.directive);
});
