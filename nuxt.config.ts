// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/devtools',
    '@formkit/auto-animate',
    '@nuxtjs/tailwindcss',
    '@vesp/nuxt-fontawesome'
  ],
  fontawesome: {
    icons: {
      solid: ['cog'],
      brands: ['github', 'twitter', 'discord', 'instagram'],
      regular: ['face-smile']
    }
  },
  // TODO: Enable i18n module when ready
  // i18n: { 
  //   locales: [
  //     { code: 'en', name: 'English', file: 'en.json' },
  //   ],
  //   defaultLocale: 'en',
  //   lazy: true,
  //   langDir: 'locales/',
  // }
})