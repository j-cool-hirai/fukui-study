<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
</script>

<template>
  <div class="p-menu__container">
    <Swiper
      :slidesPerView="1"
      :breakpoints="{
        600: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }"
      :loop="true"
      :spaceBetween="20"
      :autoplay="{ delay: 3000 }"
      :modules="[Autoplay, Navigation, Pagination]"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :pagination="{ clickable: true }"
    >
      <SwiperSlide
        v-for="(card, index) in cards"
        :key="index"
        class="p-menu__card"
      >
        <Card
          :cardText="card.text"
          :price="card.price"
          :imagePath="card.imagePath"
          :width="card.width"
          :height="card.height"
        />
      </SwiperSlide>
    </Swiper>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Card from "@/components/SliderCard.vue";

export default {
  components: {
    Card,
  },
  data() {
    return {
      cards: [
        {
          link: "",
          text: "ハンドケア / フットケア",
          price: "3,000 yen～",
          imagePath: "/images/menu/Image_01.jpg",
          width: "865",
          height: "605",
        },
        {
          link: "",
          text: "ウェディングメニュー",
          price: "12,000 yen～",
          imagePath: "/images/menu/Image_02.jpg",
          width: "865",
          height: "604",
        },
        {
          link: "",
          text: "ボディトリートメント",
          price: "8,000 yen～",
          imagePath: "/images/menu/Image_03.jpg",
          width: "865",
          height: "605",
        },
        {
          link: "",
          text: "フェイシャル",
          price: "5,000 yen～",
          imagePath: "/images/menu/Image_04.jpg",
          width: "865",
          height: "604",
        },
        {
          link: "",
          text: "メイク / セット",
          price: "3,000 yen～",
          imagePath: "/images/menu/Image_05.jpeg",
          width: "800",
          height: "560",
        },
      ],
    };
  },
};
</script>
