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
};
