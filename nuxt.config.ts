// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  srcDir: "src",
  experimental: {
    componentIslands: true,
  },
  app: {
    rootId: "ssi",
    rootTag: "main",
    pageTransition: true,
    layoutTransition: true,
  },
  components: {
    dirs: ["~/components", "~/components/design"],
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  tailwindcss: {},
});
