module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Sipple',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Sipple' },
      { name: 'msapplication-TileColor', content: '#503bd2' },
      { name: 'theme-color', content: '#503bd2' },
      { name: 'description', content: 'The smarter way to hydrate on-the-go without the plastic waste.' },
      { name: 'og:description', content: 'The smarter way to hydrate on-the-go without the plastic waste.' },
      { name: 'twitter:description', content: 'The smarter way to hydrate on-the-go without the plastic waste.' },
      { name: 'og:image', content: '/imgs/___.jpg' },
      { name: 'twitter:image', content: '/imgs/___.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@___' },
      { name: 'twitter:creator', content: '@___' }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest'
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#503bd2'
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/sitemap',
  ],
  /*
  ** Plugins
  */
  plugins: [
    '@/plugins/bus'
  ],
  /*
  ** CSS
  */
  generate: {
    routes: [
      '/',
      '/problem',
      '/solution',
      '/mission',
      '/solution',
      '/about',
    ],
    subFolders: false
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.sipplehydration.com/',
    exclude: ['/styleguide'],
    generate: true,
    routes: [
      '/',
      '/problem',
      '/solution',
      '/mission',
      '/solution',
      '/about',
    ],
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
