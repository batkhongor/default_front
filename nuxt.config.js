
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Zilla+Slab:400,700'
      },
    ]
    
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/style.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
 buildModules: ['@nuxt/typescript-build'],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-i18n',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    ['cookie-universal-nuxt', { alias: 'cookiz'}],
    'semantic-ui-vue/nuxt', // includes styles from semantic-ui-css
    //['semantic-ui-vue/nuxt', { css: true }], // if you have your own semantic-ui styles
  ],
  styleResources: {
    scss: ['./assets/scss/*.scss']
  },
  axios: {
    // proxyHeaders: false
    baseURL: process.env.API_URL,
  },
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'mn',
        name: 'Монгол'
      }
    ],
    defaultLocale: 'mn',
    vueI18n: {
      fallbackLocale: 'mn',
      messages: {
        en: require("./locales/en.json"),
        mn: require("./locales/mn.json")
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
