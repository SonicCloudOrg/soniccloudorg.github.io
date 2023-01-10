import type { UserConfig } from 'vitepress'
import anchor from 'markdown-it-anchor'

const nav = [
  {
    text: '文档',
    items: [
      {
        items: [
          { text: '部署文档', link: '/deploy/back-end-deploy' },
          { text: '使用文档', link: '/doc/doc-use' },
          { text: '开发文档', link: '/contribute/con-re' },
          { text: '企业案例', link: 'https://sonic-cloud.wiki/t/user' }
        ]
      }
    ]
  },
  {
    text: '周边生态',
    items: [
      {
        items: [
          { text: 'sonic-ios-bridge', link: '/sib/re-sib' },
          { text: 'sonic-android-apk', link: '/saa/re-saa' },
          { text: 'sonic-driver-core', link: '/sdc/re-sdc' },
          { text: 'sonic-ci-helper-plugin', link: '/sch/re-sch' },
          { text: 'sonic-go-mitmproxy', link: '/sgm/re-sgm' },
          { text: 'sonic-ios-webkit-adapter', link: '/siwa/re-siwa' },
          { text: 'sonic-android-supply', link: '/sas/re-sas' },
          { text: 'sonic-vision-core', link: '/svc/re-svc' }
        ]
      }
    ]
  },
  {
    text: '硬件方案',
    link: '/cabinet'
  },
  {
    text: '版本记录',
    link: '/version-record'
  },
  {
    text: '关于',
    items: [
      {
        items: [
          { text: '用户社区', link: 'https://sonic-cloud.wiki' },
          { text: '联系我们', link: 'https://sonic-cloud.wiki/p/1-contact' },
          {
            text: 'Open Collective',
            link: 'https://opencollective.com/soniccloudorg'
          },
          { text: '免责声明', link: '/about/policy' }
        ]
      }
    ]
  }
]

const sidebar = {
  '/deploy/': [
    {
      text: '系统部署',
      items: [
        { text: '前后端部署', link: '/deploy/back-end-deploy' },
        { text: 'Agent端部署', link: '/deploy/agent-deploy' },
        { text: '版本迁移指南', link: '/deploy/upgrade-deploy' }
      ]
    },
    {
      text: '设备接入',
      items: [
        { text: '安卓设备接入', link: '/deploy/android-deploy' },
        { text: 'iOS设备接入', link: '/deploy/ios-deploy' }
      ]
    }
  ],
  '/doc/': [
    {
      text: '开始',
      items: [
        { text: '快速上手', link: '/doc/doc-use' },
        { text: '进阶教学', link: '/doc/doc-high' }
      ]
    },
    {
      text: '远程控制相关',
      items: [
        { text: 'Agent中心', link: '/doc/doc-agent' },
        { text: '设备中心', link: '/doc/doc-device' },
        { text: '控制面板', link: '/doc/doc-control' },
        { text: '应用列表', link: '/doc/doc-app-list' },
        { text: 'WebView/H5调试', link: '/doc/doc-webview' },
        { text: '快速截图', link: '/doc/doc-quick-cap' },
        { text: 'Terminal', link: '/doc/doc-terminal' },
        { text: '网络抓包', link: '/doc/doc-proxy' },
        { text: '控件获取', link: '/doc/doc-element' },
        { text: '运行UI测试', link: '/doc/doc-run' },
        { text: '性能监控', link: '/doc/doc-perfmon' }
      ]
    },
    {
      text: '测试步骤相关',
      items: [
        { text: '自定义脚本', link: '/doc/doc-script' },
        { text: 'POCO控件', link: '/doc/doc-poco' },
        { text: '切换WebView', link: '/doc/doc-to-webview' },
        { text: 'Sonic输入法输入', link: '/doc/doc-keyboard' },
        { text: '图像识别类', link: '/doc/doc-sift' },
        { text: '迭代控件列表', link: '/doc/doc-iterator' }
      ]
    },
    {
      text: '测试管理相关',
      items: [
        { text: '控件元素', link: '/doc/doc-element-manage' },
        { text: '测试用例', link: '/doc/doc-cases' },
        { text: '测试步骤', link: '/doc/doc-steps' },
        { text: '公共步骤', link: '/doc/doc-pub' },
        { text: '全局参数', link: '/doc/doc-global' },
        { text: '测试套件', link: '/doc/doc-suite' },
        { text: '定时任务', link: '/doc/doc-quartz' },
        { text: '测试结果', link: '/doc/doc-result' }
      ]
    },
    {
      text: '项目管理相关',
      items: [
        { text: '项目管理', link: '/doc/doc-project' },
        { text: '通知机器人', link: '/doc/doc-robot' },
        { text: '版本管理', link: '/doc/doc-version' },
        { text: '模块管理', link: '/doc/doc-module' }
      ]
    }
  ],
  '/contribute/': [
    {
      text: '前言',
      items: [
        { text: '参与开发', link: '/contribute/con-re' },
      ]
    },
    {
      text: '平台端项目列表',
      items: [
        { text: 'Server端', link: '/contribute/con-server' },
        { text: 'Client端', link: '/contribute/con-client' },
        { text: 'Agent端', link: '/contribute/con-agent' }
      ]
    }
  ],
  '/sib/': [
    {
      text: '快速入门',
      items: [
        { text: '插件介绍', link: '/sib/re-sib' },
        { text: '参与开发', link: '/sib/dev-sib' },
      ]
    },
    {
      text: '功能列表',
      items: [
        { text: '设备信息', link: '/sib/sib-device' },
        { text: 'App相关交互', link: '/sib/sib-app' },
        { text: '挂载开发者镜像', link: '/sib/sib-mount' },
        { text: '进程相关', link: '/sib/sib-ps' },
        { text: 'XCTest相关', link: '/sib/sib-run' },
        { text: '电池相关信息', link: '/sib/sib-battery' },
        { text: '网络IP信息', link: '/sib/sib-ip' },
        { text: '重启或关机', link: '/sib/sib-reboot' },
        { text: '代理转发', link: '/sib/sib-proxy' },
        { text: '崩溃日志收集', link: '/sib/sib-crash' },
        { text: '模拟定位', link: '/sib/sib-location' },
        { text: '屏幕旋转方向', link: '/sib/sib-orientation' },
        { text: '系统日志', link: '/sib/sib-syslog' },
        { text: '屏幕截图', link: '/sib/sib-screen' },
        { text: '文件管理', link: '/sib/sib-afc' },
        { text: '性能监控', link: '/sib/sib-perf' },
        { text: '网页检阅器', link: '/sib/sib-webinspector' },
        { text: '远程连接', link: '/sib/sib-remote' },
      ]
    }
  ],
  '/saa/': [
    {
      text: '快速入门',
      items: [
        { text: '插件介绍', link: '/saa/re-saa' },
        { text: '参与开发', link: '/saa/dev-saa' },
      ]
    },
    {
      text: '功能列表',
      items: [
        { text: '实时输入法', link: '/saa/saa-keyboard' },
        { text: 'App列表获取', link: '/saa/saa-app' },
        { text: '远程音频传输', link: '/saa/saa-audio' },
        { text: '屏幕旋转方向', link: '/saa/saa-orientation' },
        { text: '物理查找', link: '/saa/saa-search' },
        { text: '实时屏幕触控', link: '/saa/saa-touch' },
        { text: 'WIFI信息获取', link: '/saa/saa-wifi' },
      ]
    }
  ],
  '/sdc/': [
    {
      text: '快速入门',
      items: [
        { text: '插件介绍', link: '/sdc/re-sdc' },
        { text: '参与开发', link: '/sdc/dev-sdc' },
      ]
    },
    {
      text: 'Driver列表',
      items: [
        { text: 'AndroidDriver', link: '/sdc/sdc-android' },
        { text: 'IOSDriver', link: '/sdc/sdc-ios' },
        { text: 'PocoDriver', link: '/sdc/sdc-poco' },
      ]
    }
  ],
  '/sch/': [
    {
      text: '快速入门',
      items: [
        { text: '插件介绍', link: '/sch/re-sch' },
        { text: '参与开发', link: '/sch/dev-sch' },
      ]
    },
    {
      text: '功能列表',
      items: [
        { text: '批量装包流程', link: '/sch/sch-upload' },
      ]
    }
  ],
  '/sgm/': [
    {
      text: '快速入门',
      items: [
        { text: '插件介绍', link: '/sgm/re-sgm' },
        { text: '参与开发', link: '/sgm/dev-sgm' },
      ]
    }
  ],
  '/sas/': [
    {
      text: '快速入门',
      items: [
        { text: '插件介绍', link: '/sas/re-sas' },
        { text: '参与开发', link: '/sas/dev-sas' },
      ]
    }
  ],
  '/svc/': [
    {
      text: '快速入门',
      items: [
        { text: '插件介绍', link: '/svc/re-svc' },
        { text: '参与开发', link: '/svc/dev-svc' },
      ]
    }
  ],
  '/siwa/': [
    {
      text: '快速入门',
      items: [
        { text: '插件介绍', link: '/siwa/re-siwa' },
        { text: '参与开发', link: '/siwa/dev-siwa' },
      ]
    }
  ],
  '/about/': [
    {
      text: '关于',
      items: [{ text: '免责声明', link: '/about/policy' }]
    }
  ]
}

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
      description:
        'For You, For Free, Forever. 免费开源的云真机平台，用心打造更好的使用体验。 Made with 🧡 by SonicCloudOrg.'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Sonic',
      description:
        'For You, For Free, Forever. 免费开源的云真机平台，用心打造更好的使用体验。 Made with 🧡 by SonicCloudOrg.'
    }
  },
  titleTemplate: 'Sonic - 开源云真机平台',
  srcDir: 'src',
  scrollOffset: 'header',
  lastUpdated: true, // 是否显示最后修改时间
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/assets/public/favicon.ico' }],
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
      'mets',
      {
        name: 'keywords',
        content: 'Sonic,云真机,Sonic云真机,Sonic云测,Sonic平台,Sonic测试'
      }
    ],
    [
      'script',
      null,
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
      null,
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?1e96d2d989cfa5aae34ddc9c5d4a7bdf";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();`
    ]
  ],

  themeConfig: {
    // 导航栏
    nav,
    // 侧边栏
    sidebar,
    // 社交链接
    socialLinks,
    // 国际化配置 @TODO
    // localeLinks: {
    //   items: [
    //     { text: '简体中文', link: '/' },
    //     { text: 'English', link: '/en' }
    //   ]
    // },
    // locales: {
    //   "/": getChineseThemeConfig(),
    //   "/en/": getEnglishThemeConfig()
    // },

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
    logo: '/assets/logo2-o.png',
    // 是否显示副标题
    siteTitle: false,

    //  页面右侧边栏标题
    outlineTitle: '本页目录',

    // 页面编辑链接配置
    editLink: {
      pattern:
        'https://github.com/SonicCloudOrg/sonic-offical-website/src/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdatedText: '最近修改时间',

    // 页脚配置
    footer: {
      license: {
        text: 'MIT License',
        link: 'https://opensource.org/licenses/MIT'
      },
      copyright:
        'Copyright © All Rights Reserved Sonic Project for SonicCloudOrg 版权所有'
    }
  },

  // vite config
  vite: {},

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
