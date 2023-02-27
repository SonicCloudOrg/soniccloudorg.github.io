const nav = [
  {
    text: 'Docs',
    items: [
      {
        items: [
          { text: 'Deploy', link: '/en/deploy/back-end-deploy' },
          { text: 'Document', link: '/en/doc/doc-use' },
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
    link: '/en/version-record'
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
  '/en/deploy/': [
    {
      text: 'System deployment',
      items: [
        {
          text: 'Front and back end deploy',
          link: '/en/deploy/back-end-deploy'
        },
        { text: 'Agent deployment', link: '/en/deploy/agent-deploy' },
        { text: 'Version migration guide', link: '/en/deploy/upgrade-deploy' }
      ]
    },
    {
      text: 'Device access',
      items: [
        { text: 'Android device access', link: '/en/deploy/android-deploy' },
        { text: 'iOS device access', link: '/en/deploy/ios-deploy' }
      ]
    }
  ],
  '/en/doc/': [
    {
      text: 'Start',
      items: [
        { text: 'Get started quickly', link: '/en/doc/doc-use' },
        { text: 'Advanced Teaching', link: '/en/doc/doc-high' }
      ]
    },
    {
      text: 'Remote control related',
      items: [
        { text: 'Control Panel', link: '/en/doc/doc-control' },
        { text: 'Application List', link: '/en/doc/doc-app-list' },
        { text: 'WebView/H5 Debug', link: '/en/doc/doc-webview' },
        { text: 'Quick screenshot', link: '/en/doc/doc-quick-cap' },
        { text: 'Terminal', link: '/en/doc/doc-terminal' },
        { text: 'Network capture', link: '/en/doc/doc-proxy' },
        { text: 'Element capture', link: '/en/doc/doc-element' },
        { text: 'Run UI tests', link: '/en/doc/doc-run' },
        { text: 'Performance monitoring', link: '/en/doc/doc-perfmon' },
        { text: 'Agent center', link: '/en/doc/doc-agent' },
        { text: 'Device Center', link: '/en/doc/doc-device' },
        { text: 'Automatic and Forced Unoccupied', link: '/en/doc/doc-stop-debug' }
      ]
    },
    {
      text: 'Test step related',
      items: [
        { text: 'Custom script', link: '/en/doc/doc-script' },
        { text: 'POCO Element', link: '/en/doc/doc-poco' },
        { text: 'Switch WebView', link: '/en/doc/doc-to-webview' },
        { text: 'Sonic Input', link: '/en/doc/doc-keyboard' },
        { text: 'Image recognition', link: '/en/doc/doc-sift' },
        { text: 'Iterate list of elements', link: '/en/doc/doc-iterator' }
      ]
    },
    {
      text: 'Test management related',
      items: [
        { text: 'Elements', link: '/en/doc/doc-element-manage' },
        { text: 'Test case', link: '/en/doc/doc-cases' },
        { text: 'Test step', link: '/en/doc/doc-steps' },
        { text: 'Public step', link: '/en/doc/doc-pub' },
        { text: 'Global parameters', link: '/en/doc/doc-global' },
        { text: 'Test suite', link: '/en/doc/doc-suite' },
        { text: 'Timed task', link: '/en/doc/doc-quartz' },
        { text: 'Test result', link: '/en/doc/doc-result' }
      ]
    },
    {
      text: 'Project management related',
      items: [
        { text: 'Project management', link: '/en/doc/doc-project' },
        { text: 'Notify bot', link: '/en/doc/doc-robot' },
        { text: 'Version management', link: '/en/doc/doc-version' },
        { text: 'Module management', link: '/en/doc/doc-module' }
      ]
    },
    {
      text: 'Background management center',
      items: [
        { text: 'Resource management', link: '/en/doc/doc-resource' },
        { text: 'Role management', link: '/en/doc/doc-role' },
        { text: 'User management', link: '/en/doc/doc-user' },
        { text: 'System timing task', link: '/en/doc/doc-sys-job' }
      ]
    }
  ],
  '/contribute/': [
    {
      text: '前言',
      items: [{ text: '参与开发', link: '/contribute/con-re' }]
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
        { text: '参与开发', link: '/sib/dev-sib' }
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
        { text: '远程连接', link: '/sib/sib-remote' }
      ]
    }
  ],
  '/saa/': [
    {
      text: '快速入门',
      items: [
        { text: '插件介绍', link: '/saa/re-saa' },
        { text: '参与开发', link: '/saa/dev-saa' }
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
        { text: 'WIFI信息获取', link: '/saa/saa-wifi' }
      ]
    }
  ],
  '/sdc/': [
    {
      text: '快速入门',
      items: [
        { text: '插件介绍', link: '/sdc/re-sdc' },
        { text: '参与开发', link: '/sdc/dev-sdc' }
      ]
    },
    {
      text: 'Driver列表',
      items: [
        { text: 'AndroidDriver', link: '/sdc/sdc-android' },
        { text: 'IOSDriver', link: '/sdc/sdc-ios' },
        { text: 'PocoDriver', link: '/sdc/sdc-poco' }
      ]
    }
  ],
  '/sch/': [
    {
      text: '快速入门',
      items: [
        { text: '插件介绍', link: '/sch/re-sch' },
        { text: '参与开发', link: '/sch/dev-sch' }
      ]
    },
    {
      text: '功能列表',
      items: [{ text: '批量装包流程', link: '/sch/sch-upload' }]
    }
  ],
  '/sgm/': [
    {
      text: '快速入门',
      items: [
        { text: '插件介绍', link: '/sgm/re-sgm' },
        { text: '参与开发', link: '/sgm/dev-sgm' }
      ]
    }
  ],
  '/sas/': [
    {
      text: '快速入门',
      items: [
        { text: '插件介绍', link: '/sas/re-sas' },
        { text: '参与开发', link: '/sas/dev-sas' }
      ]
    },
    {
      text: '功能列表',
      items: [
        { text: '远程连接', link: '/sas/sas-share' },
        { text: '性能监控', link: '/sas/sas-perf' }
      ]
    }
  ],
  '/svc/': [
    {
      text: '快速入门',
      items: [
        { text: '插件介绍', link: '/svc/re-svc' },
        { text: '参与开发', link: '/svc/dev-svc' }
      ]
    }
  ],
  '/siwa/': [
    {
      text: '快速入门',
      items: [
        { text: '插件介绍', link: '/siwa/re-siwa' },
        { text: '参与开发', link: '/siwa/dev-siwa' }
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

const initENThemeConfig = {
  nav,
  sidebar,
  //  页面右侧边栏标题
  outlineTitle: 'On this page',
  lastUpdatedText: 'Last Update time',
  // 页面编辑链接配置
  editLink: {
    pattern:
      'https://github.com/SonicCloudOrg/sonic-offical-website/edit/main/src/:path',
    text: 'Edit this page on GitHub'
  },
  // 页脚配置
  footer: {
    copyright: 'Copyright © All Rights Reserved Sonic Project for SonicCloudOrg'
  }
}

export default initENThemeConfig
