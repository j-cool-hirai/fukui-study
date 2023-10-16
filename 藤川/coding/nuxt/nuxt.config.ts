// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [{ src: "~/assets/scss/style.scss" }],
  modules: ["@nuxt/image"],
  image: {
    domains: ["avatars0.githubusercontent.com"],
    inject: true,
    format: ["webp"],
  },
});
