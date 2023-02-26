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
        { text: '控制面板', link: '/doc/doc-control' },
        { text: '应用列表', link: '/doc/doc-app-list' },
        { text: 'WebView/H5调试', link: '/doc/doc-webview' },
        { text: '快速截图', link: '/doc/doc-quick-cap' },
        { text: 'Terminal', link: '/doc/doc-terminal' },
        { text: '网络抓包', link: '/doc/doc-proxy' },
        { text: '控件获取', link: '/doc/doc-element' },
        { text: '运行UI测试', link: '/doc/doc-run' },
        { text: '性能监控', link: '/doc/doc-perfmon' },
        { text: 'Agent中心', link: '/doc/doc-agent' },
        { text: '设备中心', link: '/doc/doc-device' },
        { text: '自动与强制解除占用', link: '/doc/doc-stop-debug' }
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
    },
    {
      text: '后台管理中心',
      items: [
        { text: '资源管理', link: '/doc/doc-resource' },
        { text: '角色管理', link: '/doc/doc-role' },
        { text: '用户配置', link: '/doc/doc-user' },
        { text: '系统定时任务', link: '/doc/doc-sys-job' }
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

const initCNThemeConfig = {
  nav,
  sidebar,
  //  页面右侧边栏标题
  outlineTitle: '本页目录',
  lastUpdatedText: '最近修改时间',
  // 页面编辑链接配置
  editLink: {
    pattern:
      'https://github.com/SonicCloudOrg/sonic-offical-website/edit/main/src/:path',
    text: '在 GitHub 上编辑此页'
  }
}

export default initCNThemeConfig
