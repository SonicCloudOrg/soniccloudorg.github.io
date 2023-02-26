import { UserConfig } from 'vitepress'
import anchor from 'markdown-it-anchor'
import { jumpToNewURL } from './theme/helper'
import initCNThemeConfig from './config.cn'
import initENThemeConfig from './config.en'

// 社交链接配置（导航栏右侧）
const socialLinks = [
  { icon: 'github', link: 'https://github.com/SonicCloudOrg' },
  {
    icon: {
      svg: '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1668841768944" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="834" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M341.333333 768h436.792889L853.333333 827.107556V384h42.666667a42.666667 42.666667 0 0 1 42.666667 42.666667v576L748.600889 853.333333H384a42.666667 42.666667 0 0 1-42.666667-42.666666v-42.666667zM232.732444 682.666667L42.666667 832V170.666667a42.666667 42.666667 0 0 1 42.666666-42.666667h640a42.666667 42.666667 0 0 1 42.666667 42.666667v512H232.732444z" p-id="835"></path></svg>'
    },
    link: 'https://sonic-cloud.wiki'
  }
]

export default {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Sonic',
      titleTemplate: 'Sonic - 开源云真机平台',
      description:
        'For You, For Free, Forever. 免费开源的云真机平台，用心打造更好的使用体验。 Made with 🧡 by SonicCloudOrg.'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Sonic',
      titleTemplate: 'Sonic - Open source cloud virtual machine platform',
      description:
        'For You, For Free, Forever. 免费开源的云真机平台，用心打造更好的使用体验。 Made with 🧡 by SonicCloudOrg.'
    }
  },
  srcDir: 'src',
  scrollOffset: 'header',
  lastUpdated: true, // 是否显示最后修改时间
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: 'https://sonic-cloud.cn/favicon.ico' }],
    ['meta', { name: 'baidu-site-verification', content: 'code-tUj7cN37g6' }],
    [
      'meta',
      {
        name: 'google-site-verification',
        content: 'HwNpVEj6BjJmFVXELaQntnPP3OLpAfvnt_fyVmi3dUo'
      }
    ],
    [
      'meta',
      {
        'http-equiv': 'pragram',
        content: 'no-cache'
      }
    ],
    [
      'meta',
      {
        'http-equiv': 'cache-control',
        content: 'no-cache, no-store, must-revalidate'
      }
    ],
    [
      'meta',
      {
        'http-equiv': 'expires',
        content: '0'
      }
    ],
    [
      'meta',
      {
        name: 'keywords',
        content: 'Sonic,云真机,Sonic云真机,Sonic云测,Sonic平台,Sonic测试'
      }
    ],
    [
      'script',
      {},
      `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2962395,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
    ],
    [
      'script',
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?1e96d2d989cfa5aae34ddc9c5d4a7bdf";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();`
    ],
    ['script', {}, jumpToNewURL()]
  ],

  themeConfig: {
    // 社交链接
    socialLinks,
    // 国际化配置 @TODO
    localeLinks: {
      items: [
        { text: '简体中文', link: '/' },
        { text: 'English', link: '/en/' }
      ]
    },
    locales: {
      '/': initCNThemeConfig,
      '/en/': initENThemeConfig
    },

    // 搜索相关配置
    algolia: {
      indexName: 'sonic-cloud',
      appId: '173PUFCVUH',
      apiKey: '4c05e65805bc511ab341c44ca5c29e83',
      translations: {
        button: {
          buttonText: 'Search Docs / 文档搜索',
          buttonAriaLabel: 'Search Docs / 文档搜索'
        },
        modal: {
          searchBox: {
            resetButtonTitle: 'Clear 清除查询条件',
            resetButtonAriaLabel: 'Clear 清除查询条件',
            cancelButtonText: 'Cancel 取消',
            cancelButtonAriaLabel: 'Cancel 取消'
          },
          startScreen: {
            recentSearchesTitle: 'History 搜索历史',
            noRecentSearchesText: 'History is empty 没有搜索历史',
            saveRecentSearchButtonTitle: 'Save to history 保存至搜索历史',
            removeRecentSearchButtonTitle:
              'Remove from history 从搜索历史中移除',
            favoriteSearchesTitle: 'Favorite 收藏',
            removeFavoriteSearchButtonTitle: 'Remove from favorite 从收藏中移除'
          },
          errorScreen: {
            titleText: 'Unable to get results 无法获取结果',
            helpText:
              'You need to check your network connection 你可能需要检查你的网络连接'
          },
          footer: {
            selectText: 'Choose 选择',
            navigateText: 'Switch 切换',
            closeText: 'Close 关闭'
          },
          noResultsScreen: {
            noResultsText: 'Unable to find related results 无法找到相关结果',
            suggestedQueryText: 'You can try to search 你可以尝试查询',
            reportMissingResultsText:
              'Do you think the query should have results? 你认为该查询应该有结果？',
            reportMissingResultsLinkText: 'Click Feedback 点击反馈'
          }
        }
      }
    },

    // 网站 logo & title
    logo: 'https://sonic-cloud.cn/logo-full.png',
    // 是否显示副标题
    siteTitle: false
  },

  // vite config
  vite: {
    server: {
      host: true
    }
  },

  // @TBD 未生效
  // markdown render config
  markdown: {
    // options for markdown-it-anchor
    // https://github.com/valeriangalliat/markdown-it-anchor#usage
    // anchor: {
    //   permalink: anchor.permalink.headerLink()
    // },

    // options for @mdit-vue/plugin-toc
    // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
    // toc: { level: [1, 2, 3] },

    config: (md) => {
      // use more markdown-it plugins!
      md.use(anchor, {
        level: 6
      })
    }
  }
} as UserConfig
