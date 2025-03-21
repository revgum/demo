// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  typescript: {
    typeCheck: false,
  },
  devtools: { enabled: Boolean(process.env.NUXT_DEV_TOOLS || false) },
  srcDir: 'src/',
  ignore: ['./*', '!./src/**'],
  modules: ['@nuxt/ui'],
  css: ['~/assets/tailwind.css'],
  colorMode: {
    preference: 'light',
  },
  vite: {
    server: {
      watch: {
        usePolling: true, // necessary for use with podman container
        interval: 300, // ms
      },
    },
  },
});
