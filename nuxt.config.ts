// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/fonts'],

  eslint: {
    config: {
      stylistic: true
    }
  },
  typescript: {
    typeCheck: true
  }
})