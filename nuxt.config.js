import translations from './translations.json';


export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  server: {
    host: '0.0.0.0',
    port: 80
  },
  head: {
    title: 'Medor',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', sizes: '16x16', href: '/favicon.png' },   
   ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/moment'
  ],


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/i18n',
    '@nuxtjs/axios',
    ['nuxt-mail', {
      message: {
        to: 'azim@sanoapp.io',
      },
      smtp: {
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "9970a35c2892ae",
          pass: "be54ca74cee55d"
        }
      },
    }],
  ],
  
  i18n: {
      locales: ['de', 'ru'],
      defaultLocale: 'de',
        vueI18n: {
          fallbackLocale: 'de',
          messages: translations
        },
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          alwaysRedirect: true,
          fallbackLocale: 'de'
        }
      },
  
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
      baseURL: process.env.BASE_URL,
    },
  
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }
  }
  
  