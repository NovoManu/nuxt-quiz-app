import pkg from './package'

export default {
  mode: 'universal',
  server: {
    port: 9000
  },
  head: {
    title: 'Quiz App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: [
    {
      src: '~/assets/less/app.less',
      lang: 'less'
    }
  ],
  router: {
    scrollBehavior: function(to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  plugins: [
    '~/plugins/api',
    '~/plugins/elements',
    '~/plugins/hotkey',
    '~/plugins/observer',
    '~/plugins/parallax',
    '~/plugins/filters'
  ],
  modules: ['@nuxtjs/axios', 'vue-scrollto/nuxt'],
  axios: {
    baseUrl: 'http://localhost:3000',
    proxy: false
  },
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
