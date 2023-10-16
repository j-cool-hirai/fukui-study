<template>
  <div class="p-loading">
    <div class="p-loading__inner">
      <p class="p-loading__text">
        <span v-for="(char, index) in text" :key="index">{{ char }}</span>
      </p>
      <!-- /.p-loading__text  -->
    </div>
    <!-- /.p-loading__inner -->
  </div>
  <!-- /.p-loading -->
</template>

<script>
export default {
  data() {
    return {
      text: "Beautiful Days", // 表示したいテキスト
    };
  },
};
</script>
