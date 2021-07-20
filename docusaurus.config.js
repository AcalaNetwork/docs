const BASE_URL = process.env.NODE_ENV === 'development' ? '/' : '/';

module.exports = {
  title: 'acala',
  tagline: 'Acala docs JavaScript',
  url: 'https://acala.network/',
  baseUrl: BASE_URL,
  favicon: 'img/favicon.ico',
  organizationName: 'acala-network',
  onBrokenLinks: 'warn',
  projectName: 'docs',
  stylesheets: [],
  themeConfig: {
    navbar: {
      title: 'acala',
      logo: {
        alt: 'acala-network',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://apps.acala.network',
          label: 'Apps',
          position: 'right',
        },
        {
          href: 'https://github.com/AcalaNetwork/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {}
  },
  presets: [
    ['@docusaurus/preset-classic', {
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/AcalaNetwork/docs/edit/master/',
        routeBasePath: '/'
      },
      blog: {
        showReadingTime: true,
        editUrl: 'https://github.com/AcalaNetwork/docs/edit/master/',
      },
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      }
    }]
  ]
};
