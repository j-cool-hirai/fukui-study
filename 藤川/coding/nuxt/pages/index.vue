<template>
  <section class="l-wrapper p-lead" id="about">
    <div class="p-lead__inner">
      <div class="c-column p-lead__content">
        <div class="p-lead__top">
          <h2 class="p-lead__main">
            白金台にある<span class="c-paragraph">癒しのプライベート空間</span>
          </h2>
          <!-- /.p-lead__main -->
          <p class="p-lead__text">
            <span class="c-paragraph"
              >エステサロンビューティフルデイズは、</span
            >
            <span class="c-paragraph"
              >がんばるあなたが<span class="u-sp"
                >ちょっと疲れた時に立ち寄れる</span
              ></span
            ><span class="c-paragraph">ほっとする時間をつくります。</span>
          </p>
          <!-- /.p-lead__text -->
        </div>
        <!-- /.c-container__top -->
        <a href="" class="c-link">お店のご紹介</a>
        <!-- /.c-link -->
      </div>
      <!-- /.c-container .p-lead__content -->
      <NuxtPicture
        src="/images/lead/lead-img.jpeg"
        alt=""
        class="p-lead__image"
        :width="1000"
        :height="601"
        loading="lazy"
      />
      <!-- /.p-lead__image -->
    </div>
    <!-- /.p-lead__inner -->
  </section>
  <!-- /.p-lead -->
  <section class="l-wrapper p-menu" id="menu">
    <div class="p-menu__inner">
      <h2 class="c-heading">Menu</h2>
      <!-- /.c-heading -->
      <SliderContent />
      <a href="" class="c-link p-menu__button">メニュー一覧を見る</a>
      <!-- /.c-link -->
    </div>
    <!-- /.p-menu__inner -->
  </section>
  <!-- /.p-menu -->

  <section class="l-wrapper p-contact" id="contact">
    <div class="p-contact__inner">
      <div class="c-column p-contact__content">
        <div class="p-contact__top">
          <h2 class="p-contact__main">ご予約方法</h2>
          <!-- /.p-contact__main -->
          <p class="p-contact__text">
            TEL<a class="p-contact__text--link" href="tel:0312345678"
              >03-1234-5678</a
            >
          </p>
          <!-- /.p-contact__text -->
          <p class="p-contact__time">（営業時間：10:00-20:00）</p>
          <!-- /.p-contact__time -->
        </div>
        <!-- /.c-container__top -->
        <a href="" class="c-link">お問い合わせ</a>
        <!-- /.c-link -->
      </div>
      <!-- /.c-container .p-contact__content -->
      <NuxtPicture
        src="/images/contact/contact-img.jpeg"
        alt=""
        class="p-contact__image"
        loading="lazy"
        :width="1000"
        :height="667"
      />
      <!-- /.p-contact__image -->
    </div>
    <!-- /.p-contact__inner -->
  </section>
  <!-- /.p-contact -->
  <section class="l-wrapper p-blog" id="blog">
    <h2 class="c-heading">Blog</h2>
    <div class="p-blog__inner">
      <div class="p-blog__left">
        <article class="p-blog__content">
          <a href="" class="p-blog__container">
            <div class="p-blog__main">
              <h3 class="p-blog__title">お得なコスメキャンペーンを実施中！</h3>
              <!-- /.p-blog__title -->
              <p class="p-blog__text">
                エステサロンビューティフルデイズの春のコスメキャンペーンがスタートしました。
              </p>
              <!-- /.p-blog__text -->
              <a href="" class="p-blog__link">Read More</a>
              <!-- /.p-blog__link -->
            </div>
            <!-- /.p-blog__main -->
            <div class="p-blog__thumb">
              <NuxtPicture
                src="/images/blog/blog_01.jpg"
                alt=""
                class="p-blog__image"
                loading="lazy"
                :width="800"
                :height="855"
              />
              <!-- /.p-blog__image -->
              <time class="p-blog__date" datetime="2021-03-04">2021.3.4</time>
              <!-- /.p-blog__date -->
            </div>
            <!-- /.p-blog__thumb -->
          </a>
        </article>
        <!-- /.p-blog__content -->
      </div>
      <!-- /.p-blog__left -->

      <div class="p-blog__right">
        <article class="p-blog__content --large">
          <a href="" class="p-blog__container">
            <div class="p-blog__main">
              <h3 class="p-blog__title">新春のごあいさつ</h3>
              <!-- /.p-blog__title -->
              <a href="" class="p-blog__link">Read More</a>
              <!-- /.p-blog__link -->
            </div>
            <!-- /.p-blog__main -->
            <div class="p-blog__thumb">
              <NuxtPicture
                src="/images/blog/blog_02.jpg"
                alt=""
                class="p-blog__image"
                loading="lazy"
                :width="1000"
                :height="662"
              />
              <!-- /.p-blog__image -->
              <time class="p-blog__date" datetime="2021-01-04">2021.1.4</time>
              <!-- /.p-blog__date -->
            </div>
            <!-- /.p-blog__thumb -->
          </a>
        </article>
        <!-- /.p-blog__content -->
        <article class="p-blog__content --small">
          <a href="" class="p-blog__container">
            <div class="p-blog__main">
              <h3 class="p-blog__title">本日のお客様</h3>
              <!-- /.p-blog__title -->
              <a href="" class="p-blog__link">Read More</a>
              <!-- /.p-blog__link -->
            </div>
            <!-- /.p-blog__main -->
            <div class="p-blog__thumb">
              <NuxtPicture
                src="/images/blog/blog_03.jpg"
                alt=""
                class="p-blog__image"
                loading="lazy"
                :width="1000"
                :height="740"
              />
              <!-- /.p-blog__image -->
              <time class="p-blog__date" datetime="2020-12-25">2020.12.25</time>
              <!-- /.p-blog__date -->
            </div>
            <!-- /.p-blog__thumb -->
          </a>
        </article>
        <!-- /.p-blog__content -->
        <article class="p-blog__content --medium">
          <a href="" class="p-blog__container">
            <div class="p-blog__main">
              <h3 class="p-blog__title">
                クリスマスイブの準備はおすみですか？
              </h3>
              <!-- /.p-blog__title -->
              <a href="" class="p-blog__link">Read More</a>
              <!-- /.p-blog__link -->
            </div>
            <!-- /.p-blog__main -->
            <div class="p-blog__thumb">
              <NuxtPicture
                src="/images/blog/blog_04.jpg"
                alt=""
                class="p-blog__image"
                loading="lazy"
                :width="800"
                :height="534"
              />
              <!-- /.p-blog__image -->
              <time class="p-blog__date" datetime="2020-12-24">2020.12.24</time>
              <!-- /.p-blog__date -->
            </div>
            <!-- /.p-blog__thumb -->
          </a>
        </article>
        <!-- /.p-blog__content -->
        <article class="p-blog__content --medium">
          <a href="" class="p-blog__container">
            <div class="p-blog__main">
              <h3 class="p-blog__title">美容に良い食べ物のご紹介！</h3>
              <!-- /.p-blog__title -->
              <a href="" class="p-blog__link">Read More</a>
              <!-- /.p-blog__link -->
            </div>
            <!-- /.p-blog__main -->
            <div class="p-blog__thumb">
              <NuxtPicture
                src="/images/blog/blog_05.jpg"
                alt=""
                class="p-blog__image"
                loading="lazy"
                :width="1000"
                :height="662"
              />
              <!-- /.p-blog__image -->
              <time class="p-blog__date" datetime="2020-11-09">2020.11.9</time>
              <!-- /.p-blog__date -->
            </div>
            <!-- /.p-blog__thumb -->
          </a>
        </article>
        <!-- /.p-blog__content -->
        <article class="p-blog__content --small">
          <a href="" class="p-blog__container">
            <div class="p-blog__main">
              <h3 class="p-blog__title">夏のイチオシコスメ！</h3>
              <!-- /.p-blog__title -->
              <a href="" class="p-blog__link">Read More</a>
              <!-- /.p-blog__link -->
            </div>
            <!-- /.p-blog__main -->
            <div class="p-blog__thumb">
              <NuxtPicture
                src="/images/blog/blog_06.jpg"
                alt=""
                class="p-blog__image"
                loading="lazy"
                :width="1000"
                :height="667"
              />
              <!-- /.p-blog__image -->
              <time class="p-blog__date" datetime="2020-08-09">2020.08.09</time>
              <!-- /.p-blog__date -->
            </div>
            <!-- /.p-blog__thumb -->
          </a>
        </article>
        <!-- /.p-blog__content -->
        <article class="p-blog__content --large">
          <a href="" class="p-blog__container">
            <div class="p-blog__main">
              <h3 class="p-blog__title">ブログはじめました</h3>
              <!-- /.p-blog__title -->
              <a href="" class="p-blog__link">Read More</a>
              <!-- /.p-blog__link -->
            </div>
            <!-- /.p-blog__main -->
            <div class="p-blog__thumb">
              <NuxtPicture
                src="/images/blog/blog_07.jpg"
                alt=""
                class="p-blog__image"
                loading="lazy"
                :width="1000"
                :height="667"
              />
              <!-- /.p-blog__image -->
              <time class="p-blog__date" datetime="2020-07-07">2020.07.07</time>
              <!-- /.p-blog__date -->
            </div>
            <!-- /.p-blog__thumb -->
          </a>
        </article>
        <!-- /.p-blog__content -->
      </div>
      <!-- /.p-blog__left -->
    </div>
    <!-- /.p-blog__inner -->
  </section>
  <!-- /.p-blog -->
</template>
