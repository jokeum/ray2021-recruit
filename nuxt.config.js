export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Rescue Action by Youth .gov 4.0',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    [
      'nuxt-social-meta',
      {
        url: 'https://ray.pdis.nat.gov.tw',
        title: 'Rescue Action by Youth .gov 4.0',
        site_name: 'Rescue Action by Youth .gov',
        description: '一場改造公部門網站的熱血行動！',
        img: '/repo-social-preivew-crop.jpg',
        locale: 'zh-TW',
        twitter_card: '一場改造公部門網站的熱血行動！',
        themeColor: '#ee6047'
      }
    ]
  ],

  bootstrapVue: {
    componentPlugins: [
      'NavbarPlugin',
      'ImagePlugin'
    ]
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
