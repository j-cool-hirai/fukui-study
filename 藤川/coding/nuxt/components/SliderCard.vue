<template>
  <a :href="link" class="p-menu__link">
    <NuxtPicture
      :src="imagePath"
      alt=""
      class="p-menu__image"
      :width="width"
      :height="height"
      loading="lazy"
    />
    <div class="p-menu__content">
      <p class="p-menu__title">{{ cardText }}</p>
      <p class="p-menu__text">{{ price }}</p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    link: String,
    cardText: String,
    price: String,
    imagePath: String,
    width: String,
    height: String,
  },
};
</script>
