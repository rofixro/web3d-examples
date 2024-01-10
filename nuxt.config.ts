// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: ["normalize.css/normalize.css"],
  runtimeConfig: {
    public: {
      CESIUM_TOKEN: process.env.CESIUM_TOKEN,
      TILES_MODEL_URL: process.env.TILES_MODEL_URL,
    },
  },
});
