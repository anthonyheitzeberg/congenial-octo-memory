// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@formkit/auto-animate/nuxt',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/scripts',
    '@nuxt/test-utils/module',
    '@nuxt/icon',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/supabase',
  ],
  devtools: { enabled: true },

  colorMode: {
    preference: 'light',
  },
  runtimeConfig: {

  },
  compatibilityDate: '2024-04-03',
  typescript: {
    typeCheck: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
})
