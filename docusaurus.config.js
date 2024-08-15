// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PikiwiDB(Pika)',
  tagline: '为海量数据存储设计的高可用键值数据库',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.pikiwidb.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'PikiwiDB(Pika) 开源社区', // Usually your GitHub org/user name.
  projectName: 'PikiwiDB(Pika)', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://atomgit.com/zouxiangneihe/website/tree/master',
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],
          },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: '/css/katex.min.css',
      type: 'text/css',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Logo',
          src: 'img/PikiwiDB-Logo.png',
        },
        items: [
          {to: 'docs/序言', label: '文档', position: 'left'},
          {to: 'blog', label: '博客', position: 'left'}
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '微信公众号',
            items: [
              {
                label: 'PikiwiDB(Pika) 公众号',
                href: 'https://mp.weixin.qq.com/s/CvIdQs3g31DC8JztyymuqQ',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PikiwiDB 开源数据库社区`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
