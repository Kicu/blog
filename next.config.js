const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  basePath: isDev ? '' : '/blog', // for GH pages
  assetPrefix: isDev ? '' : '/blog', // for GH pages
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
