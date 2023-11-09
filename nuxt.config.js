import fs from 'fs'
import path from 'path'
import Constants from './constants'

const locales = fs
  .readdirSync(path.join(__dirname, 'locales'))
  .map((file) => file.replace(/\.json/, ''))

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'source_frontend',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/constants',
    '@/plugins/lodash',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',

  ],

  i18n: {
    locales: locales.map((locale) => ({
      code: locale,
      file: `${locale}.json`,
    })),
    defaultLocale: process.env.NUXT_APP_LOCALE || Constants.common.LOCALE,
    lazy: true,
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: process.env.NUXT_APP_LOCALE || Constants.common.LOCALE,
    },
    baseUrl: '/',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: process.env.NUXT_APP_LOCALE || Constants.common.LOCALE,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  tailwindcss: {
    viewer: false,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/styles/base/variables.scss'],
    theme: {},
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
