module.exports = {
  basePath: '/blog',
  assetPrefix: '/blog',
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
