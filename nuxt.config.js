module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'sipple',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Sipple investment site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Plugins
  */
  plugins: [
    '~/plugins/bus'
  ],
  /*
  ** CSS
  */
  generate: {
    subFolders: false
  },
  /*
  ** CSS
  */
  css: [
    // CSS file in the project
    { 
      src: '@/assets/css/base.css', 
      lang: 'postcss'
    }
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Process css with postcss plugins
    */
    postcss: [
      require('postcss-import')(),
      require('postcss-calc')(),
      require('postcss-nested')(),
      require('postcss-cssnext')({
        browsers: ['last 2 versions']
      })
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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
