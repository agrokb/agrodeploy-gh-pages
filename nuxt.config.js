export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'agro',
    mode:"spa",
    router: {
      base: '/agrodeploy-gh-pages/'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    target: 'static',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'bulma'
  ],
  env: {
    baseUrl: 'http://localhost:3000/api/data.coa.gov.tw/Service/OpenData/EIR3010304.aspx'
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],
  ssr: false,
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/bulma',
    '@nuxtjs/proxy',
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  proxy:{
    '/api/':{
      target:'https://data.coa.gov.tw/Service/OpenData/EIR3010304.aspx',
      changeOrigin: true,
      secure: false
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
  },
  pwa: {
    manifest: {
      name: 'Online Disease and Pest diagnosis',
      lang: 'en',
      useWebmanifestExtension:false,
    }
  }
}
