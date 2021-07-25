const config = require('config');

module.exports = {
  basePath: config.get('webBasePath'),
  assetPrefix: config.get('webBasePath'),
  async redirects() {
    return [
      {
        source: '/',
        destination: '/posts',
        permanent: true,
      },
    ];
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    showPrivatePosts: process.env.SHOW_PRIVATE_POSTS === 'true',
  },
};
