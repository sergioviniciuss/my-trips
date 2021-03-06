// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')

const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd // avoid service worker not updating issues while developing
  },
  images: {
    domains: ['media.graphassets.com', 'media.graphcms.com']
  }
})
