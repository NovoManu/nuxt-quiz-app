import pkg from './package'

export default {
  mode: 'universal',
  server: {
    port: 9000
  },
  head: {
    title: pkg.name,
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
  plugins: [],
  modules: ['@nuxtjs/axios', '@nuxtjs/bulma'],
  axios: {
    proxy: true,
    proxyHeaders: true,
    proxyHeadersIgnore: ['accept']
  },
  proxy: {
    '/api': {
      target: 'http://localhost:3000/',
      changeOrigin: false,
      pathRewrite: {
        '^/api/': ''
      }
    }
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
