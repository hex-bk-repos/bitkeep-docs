module.exports = (_ctx) => ({
  sourceDir: 'docs',
  dest: 'docs/dist',

  locales: {
    '/guide/': {
      lang: 'en-US',
      title: 'BitKeep Docs',
      description: 'Developer documentation for BitKeep Wallet',
    },
    '/guide/zh-cn/': {
      lang: 'zh-CN',
      title: 'BitKeep 文档',
      description: 'BitKeep 钱包开发者文档'
    }
  },

  head: [
    ['link', { rel: 'icon', href: `/bitkeep-icon.svg` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#7524F9' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#3eaf7c',
      },
    ],
    [
      'link',
      {
        rel: 'shortcut icon',
        href: '/bitkeep-icon.svg',
        color: '#3eaf7c',
        type: 'image/x-icon'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['script', { src:"/js/extend.js" }],
  ],

  theme: '@vuepress/theme-default',

  themeConfig: {
    repo: 'bitkeepwallet/docs',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    logo: '/bitkeep-icon.svg',
    smoothScroll: true,
    sidebarDepth:4,
    algolia: {
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: process.env.ALGOLIA_INDEX_NAME,
    },
    locales: {
      '/guide/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/guide/': [
            {
              title: 'Guide',
              collapsable: false,
              children: [
                ''
              ],
            },
            {
              title: 'DApp Development',
              collapsable: false,
              children: [
                'introduction',
                'quickly',
                'ethereum',
                'tron',
                'solana',
                'terra',
                'wallet-connect',
                'bitkeep-chrome',
                'open-source',
                'switch-network-for-dapp',
                'webview-function',
                'apply-list-for-dapp',
                'faq'
              ],
            },
            {
              title: 'Resources',
              collapsable: false,
              children: [
                "resources"
              ],
            },
          ],
        },
      },
      '/guide/zh-cn/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑',
        lastUpdated: '最后更新',
        nav: require('./nav/zh-cn'),
        sidebar: {
          '/guide/zh-cn': [
            {
              title: '手册',
              collapsable: false,
              children: [
                'zh-cn/'
              ],
            },
            {
              title: 'DApp 开发',
              collapsable: false,
              children: [
                // 'zh-cn/introduction',
                // 'zh-cn/quickly',
                // 'zh-cn/ethereum',
                // 'zh-cn/tron',
                // 'zh-cn/solana',
                // 'zh-cn/terra',
                // 'zh-cn/wallet-connect',
                // 'zh-cn/bitkeep-chrome',
                // 'zh-cn/open-source',
                // 'zh-cn/switch-network-for-dapp',
                // 'zh-cn/webview-function',
                // 'zh-cn/apply-list-for-dapp',
                // 'zh-cn/faq'
              ],
            },
            {
              title: '资源',
              collapsable: false,
              children: [
                // "zh-cn/resources"
              ],
            },
          ],
        }
      }
    },
  },


  plugins: [
    ['@vuepress/back-to-top', false],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        popupComponent: 'MySWUpdatePopup',
        updatePopup: true ,
      },
    ],
    ['@vuepress/medium-zoom', true],
    [
      'container',
      {
        type: 'vue',
        before: '<pre class="vue-container"><code>',
        after: '</code></pre>',
      },
    ],
    [
      'container',
      {
        type: 'upgrade',
        before: (info) => `<UpgradePath title="${info}">`,
        after: '</UpgradePath>',
      },
    ],
    [
      'vuepress-plugin-redirect',
      {
        redirectors: [
          {
            base: '/',
            alternative: '/guide/',
          }
        ],
       
      },
    ],
    [
      'tabs',
      {
        useUrlFragment: false,
      },
    ],
    ['vuepress-plugin-code-copy', true]
  ],

  extraWatchFiles: ['.vuepress/nav/en.js'],
  markdown:{
    lineNumbers: true
  }
});
