<template>
  <header id="top" class="l-header" :data-hamb="activeMenu ? 'open' : 'close'">
    <div class="l-header__inner">
      <h1 class="l-header__head">
        <span class="l-header__title">Beautiful Days</span>
        <!-- /.l-header__title -->
        <span class="l-header__sub">白金台にある癒しのエステサロン</span>
        <!-- /.l-header__sub -->
      </h1>
      <!-- /.l-header__head -->
      <NuxtPicture
        src="images/mv/header-img.jpg"
        alt=""
        class="l-header__img"
      />
      <div class="l-header__scroll">
        <p class="l-header__scroll--text">Scroll</p>
        <!-- /.l-header__scroll--text -->
      </div>
      <!-- /.l-header__scroll -->
      <button
        class="l-header__btn"
        @click="clickMenu"
        aria-label="Hamburger"
      ></button>
      <!-- /.l-header__btn -->
      <div class="l-header__panel">
        <nav class="l-header__nav">
          <p class="l-header__nav-name">Beautiful Days</p>
          <!-- /.l-header__nav-name -->
          <ul class="l-header__list">
            <li class="l-header__item">
              <a
                href="#top"
                class="l-header__link"
                @click="clickMenu"
                v-smooth-scroll
                >Top</a
              >
              <!-- /.l-header__link -->
            </li>
            <!-- /.l-header__item -->
            <li class="l-header__item">
              <a
                href="#about"
                class="l-header__link"
                @click="clickMenu"
                v-smooth-scroll
                >About</a
              >
              <!-- /.l-header__link -->
            </li>
            <!-- /.l-header__item -->
            <li class="l-header__item">
              <a
                href="#menu"
                class="l-header__link"
                @click="clickMenu"
                v-smooth-scroll
                >Menu</a
              >
              <!-- /.l-header__link -->
            </li>
            <!-- /.l-header__item -->
            <li class="l-header__item">
              <a
                href="#contact"
                class="l-header__link"
                @click="clickMenu"
                v-smooth-scroll
                >Contact</a
              >
              <!-- /.l-header__link -->
            </li>
            <!-- /.l-header__item -->
            <li class="l-header__item">
              <a
                href="#blog"
                class="l-header__link"
                @click="clickMenu"
                v-smooth-scroll
                >Blog</a
              >
              <!-- /.l-header__link -->
            </li>
            <!-- /.l-header__item -->
          </ul>
          <!-- /.l-header__list -->
        </nav>
        <!-- /.l-header__nav -->
      </div>
      <!-- /.l-header__panel -->
    </div>
    <!-- /.l-header__inner -->
    <a
      href="#top"
      class="l-header__totop"
      v-smooth-scroll
      aria-label="ToTop"
    ></a>
    <!-- /.l-header__totop -->
  </header>
  <!-- /.l-header -->
</template>

<script>
export default {
  name: "HambargerMenu",
  components: {},
  data() {
    return {
      activeMenu: false,
    };
  },
  methods: {
    clickMenu() {
      // 真偽値を反転する => Open / Close
      this.activeMenu = !this.activeMenu;

      // body要素にjs_lockScrollクラスを追加または削除
      if (this.activeMenu) {
        document.body.classList.add("js-lockScroll");
      } else {
        document.body.classList.remove("js-lockScroll");
      }
    },
  },
};
</script>
