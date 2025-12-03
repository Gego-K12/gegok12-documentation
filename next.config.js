const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  unstable_staticImage: true,
});

module.exports = withNextra({
  redirects: async () => [
    {
      source: '/',
      destination: '/documentation',
      permanent: true // use false if you're still testing
    }
  ]
});