interface Con {
  name: string
  avatar: string
}

type Cons = Con[]

interface fix {
  title: string
  url?: string
}

interface VersionRecord {
  version: string
  time: string
  fix: fix[]
  con: Cons
}

const getCon = (...name: string[]) => {
  let result = []
  for (let j in name) {
    for (let i in cons) {
      if (cons[i].name === name[j]) {
        result.push(cons[i])
        break
      }
    }
  }
  return result
}

const cons: Cons = [
  {
    name: 'ZhouYixun',
    avatar: '56339314'
  },
  {
    name: 'Roy2017',
    avatar: '24838175'
  },
  {
    name: 'JayWenStar',
    avatar: '94054171'
  },
  {
    name: 'wzasd',
    avatar: '10248793'
  },
  {
    name: 'Lewage59',
    avatar: '48939709'
  },
  {
    name: 'cjlcgg',
    avatar: '39124662'
  },
  {
    name: 'yaming116',
    avatar: '2171071'
  },
  {
    name: 'dongyi0412',
    avatar: '84267690'
  },
  {
    name: 'hellojuly',
    avatar: '64057092'
  },
  {
    name: 'RFlame',
    avatar: '9443644'
  },
  {
    name: 'mengerya',
    avatar: '30553694'
  },
  {
    name: 'spalagu',
    avatar: '67864814'
  },
  {
    name: 'weixiao12345',
    avatar: '29391100'
  },
  {
    name: 'ChaseWindWu',
    avatar: '50645139'
  },
  {
    name: 'aoliaoaoaojiao',
    avatar: '53102695'
  },
  {
    name: 'HappyTinaFu',
    avatar: '16253258'
  },
  {
    name: 'Julian0229',
    avatar: '47594178'
  },
  {
    name: 'gouldchu',
    avatar: '6470268'
  },
  {
    name: 'chenyan-master',
    avatar: '26321493'
  },
  {
    name: 'sujianjob',
    avatar: '28882742'
  },
  {
    name: 'partofme93',
    avatar: '51112273'
  },
  {
    name: 'dwqdaiwenqi',
    avatar: '18524392'
  },
  {
    name: 'Z-feiyao',
    avatar: '78218958'
  },
  {
    name: "ayumi760405",
    avatar: "28735340"
  },
  {
    name: "viz1997",
    avatar: "60973886"
  }
]

export default [
  {
    version: 'v2.2.1',
    time: 'unknown',
    fix: [
      {
        title: "修复测试套件运行时，特殊情况下安卓性能数据获取失败的情况",
        url: "https://sonic-cloud.wiki/d/2462"
      },
      {
        title: "兼容部分特殊安卓设备安装时-g报错导致无法继续进行的情况",
      },
      {
        title: "各端依赖以及组件安全性升级"
      }
    ],
    con: getCon("ZhouYixun")
  },
  {
    version: 'v2.2.0',
    time: '2023/1/14',
    feat: [
      {
        title: '（初版）安卓远控实时性能采集，测试套件支持配置安卓性能采集'
      },
      {
        title: '切换WebView的包名、process、handle参数支持传入全局变量',
        url: 'https://sonic-cloud.wiki/d/2349'
      },
      {
        title: "WebView自动化加入刷新、回退、验证网址操作"
      },
      {
        title: "新增支持Telegram机器人接入",
        url: "https://github.com/SonicCloudOrg/sonic-server/pull/283"
      },
      {
        title: "新增支持Line Notify通知接入",
        url: "https://github.com/SonicCloudOrg/sonic-server/pull/285"
      },
      {
        title: "sib app list 新增子版本号属性展示",
        url: "https://github.com/SonicCloudOrg/sonic-ios-bridge/pull/52"
      },
      {
        title: "iOS远控页面新增App子版本号展示"
      },
      {
        title: "新增操作：安卓迭代控件列表、iOS迭代控件列表、迭代POCO控件列表"
      },
      {
        title: "iOS新增操作：断言iOS原生控件属性"
      },
      {
        title: "新增操作：日志输出指定控件属性，支持安卓原生、iOS原生、POCO控件"
      },
      {
        title: "安卓新增操作：切换InVisible控件展示与隐藏"
      },
      {
        title: "sonic-android-supply新增设备性能监控功能"
      },
      {
        title: "安卓远控设备时添加关闭UIAutomator2Server按钮",
        url: "https://sonic-cloud.wiki/d/2445"
      }
    ],
    fix: [
      {
        title: "修复公共步骤中的某个步骤设置失败中断后case仍然通过的问题",
        url: "https://sonic-cloud.wiki/d/2354-case"
      },
      {
        title: "安卓随机事件操作去除音量、屏幕亮度操作"
      },
      {
        title: "优化后端启动未完成时前端503报错提示"
      },
      {
        title: "删除步骤前提示步骤存在于哪些公共步骤，用户可选择仅移出用例或完全删除"
      },
      {
        title: "公共步骤编辑页面删除步骤时，如步骤存在于用例中，可跳转前往用例详情处理"
      }, {
        title: "修复公共步骤编辑时，如果初始为iOS平台，结果会筛选出安卓步骤的问题"
      },
      {
        title: '修复部分步骤在步骤列表无展示的问题'
      },
      {
        title: "删除控件元素时，如果控件已应用于步骤中，不再强制删除步骤，可后续再编辑对应步骤"
      },
      {
        title: "调整部分Mapper语句，优化安全策略"
      },
      {
        title: "修复清理文件定时任务不生效的问题"
      }, {
        title: "优化Eureka参数，压缩微服务间发现时间"
      },
      {
        title: "修复远控时右侧控制区域无法使用鼠标选中的问题"
      }, {
        title: "修复测试报告中性能数据在切换tab后重复增加的问题"
      }, {
        title: "修复测试报告中同设备存在多用例时性能图表不显示的问题"
      }, {
        title: "修复步骤中筛选POCO控件时使用名称筛选无效的问题"
      }, {
        title: "修复sib perfmon输出的proc-network中部分字段错位的问题",
        url: "https://github.com/SonicCloudOrg/sonic-ios-bridge/issues/53"
      }, {
        title: "修复状态为InVisible的安卓原生控件没展示的问题",
        url: "https://sonic-cloud.wiki/d/2419"
      }, {
        title: "修复iOS使用网络抓包时，页面显示拒绝连接的问题",
        url: "https://sonic-cloud.wiki/d/426"
      }, {
        title: "修复iOS设备分辨率信息展示为缩放的分辨率的问题"
      }, {
        title: "官网大改造，优化文档展示与使用便捷性"
      }, {
        title: "Agent端配置文件加上英语注释"
      }],
    con: getCon('ZhouYixun', 'Lewage59', 'aoliaoaoaojiao', 'ayumi760405', 'viz1997')
  },
  {
    version: 'v2.1.2',
    time: '2022/12/14',
    fix: [
      {
        title: '更改Docker镜像源'
      },
      {
        title: '折叠步骤列表与测试结果中的脚本编辑框',
        url: 'https://sonic-cloud.wiki/d/2326'
      },
      {
        title: '修复自定义脚本中包含http和jpg时解析为图片的问题',
        url: 'https://sonic-cloud.wiki/d/2327-http'
      },
      {
        title: '修复未释放安卓转发中重复转发的接口'
      },
      {
        title: '修复sib在部分Linux机器报GLIBC的异常问题',
        url: 'https://sonic-cloud.wiki/d/2332'
      },
      {
        title: '上调了可传输文件大小为10G'
      },
      {
        title: '修复了图像识别库在某些平台不可用的Bug',
        url: 'https://sonic-cloud.wiki/d/2330-linux-agent'
      }
    ],
    con: getCon('ZhouYixun')
  },
  {
    version: 'v2.1.1',
    time: '2022/12/12',
    fix: [
      {
        title: '修复v2.1.0设备中心筛选与排序无效的问题',
        url: 'https://sonic-cloud.wiki/d/2317'
      },
      {
        title: '修复v2.1.0 Docker版Agent开启iOS模块失败的问题',
        url: 'https://sonic-cloud.wiki/d/2314'
      },
      {
        title: '优化Server报错输出与补充'
      }
    ],
    con: getCon('ZhouYixun', 'yaming116')
  },
  {
    version: 'v2.1.0',
    time: '2022/12/11',
    feat: [
      {
        title: 'iOS实时性能采集（初版）'
      },
      {
        title: 'iOS远控页面增加POCO控件获取'
      },
      {
        title: '测试套件可配置性能采集开关'
      },
      {
        title: '支持获取POCO控件文本断言'
      },
      {
        title: '支持断言POCO控件指定属性'
      },
      {
        title: 'sib新增可获取mac地址、ipv4地址、ipv6地址'
      },
      {
        title: 'iOS远控新增sib remote connect地址'
      },
      {
        title: 'Jenkins插件新增通过通配符匹配安装包'
      },
      {
        title: 'Jenkins插件新增构建参数：是否上传Sonic、是否执行测试套件'
      },
      {
        title: '测试用例列表支持id、编辑时间查询',
        url: 'https://sonic-cloud.wiki/d/2025'
      },
      {
        title: '安卓与iOS新增poco控件的poco语法、xpath语法推荐'
      },
      {
        title: '切换Handle新增index切换和url切换'
      },
      {
        title: '测试报告新增性能数据展示'
      },
      {
        title: '新增设备USB位置映射'
      },
      {
        title: '新增iOS电池温度获取'
      },
      {
        title: '新增iOS、安卓电池电压获取'
      }
    ],
    fix: [
      {
        title: '修复编辑测试用例后编辑日期没有改变的问题'
      },
      {
        title: '修复POCO控件树节点中包含特殊字符时，定位解析失败的问题',
        url: 'https://sonic-cloud.wiki/d/2017-pococny'
      },
      {
        title: '基础镜像搭建，减少更新流量消耗'
      },
      {
        title: '修复iOS初始状态为横屏时，自动化点击错位的问题'
      },
      {
        title: '修复更新v2.0.5后定时任务消失的问题'
      },
      {
        title: '优化切换WebView时自动下载的chromedriver为淘宝加速链接'
      }
    ],
    con: getCon('ZhouYixun', 'yaming116', 'dongyi0412', 'aoliaoaoaojiao')
  },
  {
    version: 'v2.0.5',
    time: '2022/11/24',
    fix: [
      {
        title: '修复低版本安卓无法使用投屏的Bug'
      },
      {
        title: '优化触控逻辑，防止频繁刷新时概率出错的问题'
      },
      {
        title: '优化前端删除设备逻辑',
        url: 'https://github.com/SonicCloudOrg/sonic-client-web/pull/229'
      },
      {
        title: '优化 transform 替换图片切换',
        url: 'https://github.com/SonicCloudOrg/sonic-client-web/pull/228'
      },
      {
        title: '升级sonic-appium-uiautomator2-server.apk依赖到5.7.4版本'
      },
      {
        title: '修复UI自动化超时时间过短引起的异常'
      },
      {
        title: '修复系统定时任务重启后会被重置的问题',
        url: 'https://github.com/SonicCloudOrg/sonic-server/pull/276'
      },
      {
        title:
          '修复运行测试套件选择设备覆盖时，如果有设备离线，导致报告不能完成的问题',
        url: 'https://sonic-cloud.wiki/d/1833'
      },
      {
        title: 'IOSDriver启动时增加重连延时'
      },
      {
        title: '修复部分iOS机器远控时出现Read time out的问题'
      }
    ],
    con: getCon(
      'ZhouYixun',
      'aoliaoaoaojiao',
      'weixiao12345',
      'dwqdaiwenqi',
      'Z-feiyao'
    )
  },
  {
    version: 'v2.0.4',
    time: '2022/11/18',
    fix: [
      {
        title: '修复部分机型输入法不可用的问题'
      },
      {
        title: '优化启动Sonic输入法、禁用输入法体验'
      },
      {
        title: '安卓新增步骤禁用Sonic输入法'
      }
    ],
    con: getCon('ZhouYixun', 'wzasd')
  },
  {
    version: 'v2.0.3',
    time: '2022/11/18',
    fix: [
      {
        title: '修复iOS远控时，偶现应用列表显示不全的问题'
      },
      {
        title: '优化iOS远控时CPU占用过高的问题'
      },
      {
        title: '修复友空间机器人超链接跳转失败的问题'
      },
      {
        title: '优化部分设备品牌Logo展示'
      },
      {
        title: '修复POCO控件包含多个重复名称子节点时，会缺失部分子节点的问题'
      },
      {
        title: '修复sonic-android-apk偶现触控断连问题'
      },
      {
        title: '修复部分机型（如三星）获取应用列表失败的兼容性问题'
      },
      {
        title: '优化安卓输入为实时输入法输入'
      },
      {
        title: '更改安卓步骤【键盘输入】为【输入法输入】'
      }
    ],
    con: getCon('ZhouYixun', 'wzasd', 'aoliaoaoaojiao')
  },
  {
    version: 'v2.0.2',
    time: '2022/11/13',
    fix: [
      {
        title:
          '优化iOS投屏逻辑，修复Chrome跨域隐私引起不可投屏问题与前端console报错问题'
      },
      {
        title: '优化iOS快速截图的截图、清空、下载逻辑'
      },
      {
        title: '提升40%左右iOS获取控件速度'
      },
      {
        title: '新增iPhone14系列、iPad Air 5系列中文名映射',
        url: 'https://sonic-cloud.wiki/d/1918'
      }
    ],
    con: getCon('ZhouYixun')
  },
  {
    version: 'v2.0.1',
    time: '2022/11/11',
    fix: [
      {
        title: '修复Docker版Agent切换Webview失败的问题',
        url: 'https://sonic-cloud.wiki/d/1894'
      },
      {
        title: '修复部分前端文案错误',
        url: 'https://sonic-cloud.wiki/d/1891'
      },
      {
        title: '修复友空间机器人发送失败的问题'
      },
      {
        title: '修复当分辨率不一致时，图片相似度无法使用的问题',
        url: 'https://sonic-cloud.wiki/d/594'
      },
      {
        title: '添加切换窗口模式，解决UI自动化获取不了多窗口控件的问题',
        url: 'https://sonic-cloud.wiki/d/1922'
      },
      {
        title: '优化添加控件页面关联项目体验'
      },
      {
        title: '调整【切换WebView】、【切换Handle】步骤到WebView控件目录下'
      },
      {
        title: '获取控件时优化多窗口模式选项'
      },
      {
        title: '前端引入eslint，提高开发体验'
      }
    ],
    con: getCon('ZhouYixun', 'dongyi0412', 'dwqdaiwenqi')
  },
  {
    version: 'v2.0.0-release',
    time: '2022/11/5',
    feat: [
      {
        title: 'iOS新增POCO控件操作相关步骤'
      },
      {
        title: 'iOS远控页面新增快速截图'
      },
      {
        title: 'POCO控件新增全局查找策略'
      },
      {
        title: '新增支持友空间机器人'
      }
    ],
    fix: [
      {
        title: '调整远控页面由当前页面跳转修改为跳转至新标签页'
      },
      {
        title: '优化运行套件runSuite接口返回信息',
        url: 'https://sonic-cloud.wiki/d/1834-testsuitesrunsuite-id'
      },
      {
        title: '修复iOS远控选择上下布局时无法拖动的问题'
      },
      {
        title: '修复iOS远控拖动投屏范围后，控件定位时渲染区块偏移的问题'
      },
      {
        title: '稍微提高iOS投屏流畅度与清晰度'
      },
      {
        title:
          '优化UIa2Server启动时默认为DISABLE_SUPPRESS_ACCESSIBILITY_SERVICES'
      },
      {
        title: '修复页面分辨率比较小时，自定义脚本保存按钮无法点击的问题',
        url: 'https://sonic-cloud.wiki/d/1811'
      },
      {
        title: '修复Cocos-creator、Cocos-js获取控件失败的Bug'
      },
      {
        title: '启用Uia2Server时禁用谷歌分析以防止可能的致命异常'
      },
      {
        title: '修复通知机器人状态图片显示不了的问题'
      },
      {
        title: '修复远控时部分横屏应用无法触控的问题'
      },
      {
        title: '修复获取部分webView进程出现404时导致远控失败的问题',
        url: 'https://sonic-cloud.wiki/d/1868'
      },
      {
        title: '修复部分设备安装Sonic APK时无法使用-g导致安装失败的问题'
      },
      {
        title: '修复随机事件使用异常的问题'
      }
    ],
    con: getCon('ZhouYixun', 'Roy2017', 'Lewage59', 'Julian0229')
  },
  {
    version: 'v2.0.0-rc',
    time: '2022/10/28',
    feat: [
      {
        title: '新增可配置LDAP ObjectClass'
      },
      {
        title: 'POCO控件新增支持xpath定位、cssSelector定位'
      }
    ],
    fix: [
      {
        title: '修复安卓远控时在未初始化UIautomator情况下获取POCO控件失败的问题'
      },
      {
        title:
          '修复iOS步骤执行时handleDes未使用同一个对象导致条件判断失效的问题',
        url: 'https://github.com/SonicCloudOrg/sonic-agent/pull/272'
      },
      {
        title: '修复LDAP登陆失败引起的问题'
      },
      {
        title: '修复部分情况下POCO节点获取失败的问题'
      },
      {
        title: '修复安卓【修复触控】对横屏的坐标偏移问题'
      },
      {
        title: '优化Agent本地图片处理，减少空间占用'
      },
      {
        title: '修复自定义脚本Python无法使用的问题',
        url: 'https://sonic-cloud.wiki/d/1770'
      },
      {
        title: '提升获取POCO控件速度与减少内存开销优化'
      },
      {
        title: '修复部分Chrome版本切换WebView时的异常',
        url: 'https://github.com/SonicCloudOrg/sonic-agent/pull/273'
      },
      {
        title: '修复在Mac上使用iOS远程Web调试时异常的问题',
        url: 'https://sonic-cloud.wiki/d/1778'
      },
      {
        title: '优化切换Webview时对Mac m1的特殊兼容',
        url: 'https://sonic-cloud.wiki/d/1803'
      },
      {
        title: '优化cdn找不到对应chromedriver时的可配置操作',
        url: 'https://sonic-cloud.wiki/d/1803'
      },
      {
        title: '修复复制步骤后拖动排序异常的问题',
        url: 'https://sonic-cloud.wiki/d/1800'
      },
      {
        title: '修复通知机器人通知的通过率小数点位数过多的问题',
        url: 'https://sonic-cloud.wiki/d/1822'
      },
      {
        title:
          '优化部分机型连接Uia2Server超时的异常，延长等待时间与加入重试逻辑'
      },
      {
        title:
          '修复runningTestsMap的key为rid导致条件判断失效遗漏用例执行的问题',
        url: ' https://github.com/SonicCloudOrg/sonic-agent/pull/276'
      },
      {
        title: '优化安卓设备兼容部分电量白名单和后台运行权限'
      },
      {
        title: '修复部分机型对5.x版本UIAutomator2 Server出现Crash问题',
        url: 'https://sonic-cloud.wiki/d/1790'
      }
    ],
    con: getCon(
      'ZhouYixun',
      'yaming116',
      'dongyi0412',
      'aoliaoaoaojiao',
      'Julian0229',
      'chenyan-master',
      'sujianjob',
      'partofme93'
    )
  },
  {
    version: 'v2.0.0-beta',
    time: '2022/10/20',
    feat: [
      {
        title: 'UI自动化添加自定义脚本引入，支持Groovy(Java)、Python'
      },
      {
        title: 'iOS在线WebView调试'
      },
      {
        title: 'Jenkins插件支持pipeline语法'
      },
      {
        title: '安卓步骤优化：控制WIFI开关、控制定位服务开关、控制飞行模式开关'
      },
      {
        title: '安卓与iOS新增步骤：全局设置查找控件重试次数与重试间隔'
      },
      {
        title: 'Agent新增支持Mac、Linux arm64结构'
      },
      {
        title: 'iOS新增步骤：剪切板设置与获取'
      },
      {
        title: '切换webview支持自定义androidProcess'
      },
      {
        title: '支持相对坐标'
      },
      {
        title: '新增脚本模板管理'
      },
      {
        title: '新增POCO控件类型'
      },
      {
        title:
          '安卓新增步骤：POCO控件存在断言、点击、拖拽、长按、冻结控件树、解冻控件树'
      },
      {
        title: '安卓新增步骤：键盘输入'
      },
      {
        title: 'Sonic新生态sonic-ios-webkit-adapter基础建设'
      },
      {
        title: '国际化建设第二期'
      },
      {
        title: 'sib更新webinspector协议相关方法'
      },
      {
        title: 'sonic-android-supply第一期建设'
      },
      {
        title: 'sonic-vision-core图像库剥离建设'
      },
      {
        title: 'sonic-driver-core新增支持UIA2 client与Poco通信'
      }
    ],
    fix: [
      {
        title: '弃用chromedriver驱动配置，简化用户部署'
      },
      {
        title: '安卓模块弃用appium'
      },
      {
        title: '安卓webview测试优化，降低用户使用门槛'
      },
      {
        title: '修复使用设备覆盖后，设备不能并行测试的bug',
        url: 'https://sonic-cloud.wiki/d/1582'
      },
      {
        title: '修复全局参数在测试套件使用时传参异常的问题',
        url: 'https://sonic-cloud.wiki/d/1618'
      },
      {
        title: '弃用adbkit方案，修复相关授权问题'
      },
      {
        title: '安卓步骤弃用双指操作、隐藏键盘、后台运行App'
      },
      {
        title: '安卓UI自动化减负、提速'
      },
      {
        title: 'Agent部署方式优化与减重'
      },
      {
        title: '修复在线调试webview时，复制xpath等信息失效的问题'
      },
      {
        title: '修复复制用例后，用例中步骤排序不正确的问题',
        url: 'https://sonic-cloud.wiki/d/1688'
      },
      {
        title: '弃用Node环境'
      },
      {
        title: '压缩优化Docker版Agent镜像大小，使其更轻量'
      },
      {
        title: '修复Agent重连后设备掉线问题'
      }
    ],
    con: getCon(
      'ZhouYixun',
      'Lewage59',
      'yaming116',
      'dongyi0412',
      'HappyTinaFu',
      'aoliaoaoaojiao',
      'weixiao12345',
      'gouldchu',
      'Julian0229'
    )
  },
  {
    version: 'v1.5.0-release',
    time: '2022/9/3',
    feat: [
      {
        title: '控件元素添加可绑定模块'
      },
      {
        title: '控件元素添加模块筛选'
      },
      {
        title: '测试用例添加模块筛选'
      },
      {
        title: '远控页添加快捷添加控件'
      },
      {
        title: 'sib更新性能监控'
      }
    ],
    fix: [
      {
        title: '修复测试套件设备覆盖时全局参数分配问题'
      },
      {
        title: '修复复制步骤后，拖拽排序异常的问题'
      },
      {
        title: '修复1.5.0-rc版本新的iOS接入不显示的Bug',
        url: 'https://sonic-cloud.wiki/d/1543'
      },
      {
        title: '修复iOS 12.5版本挂载失败问题'
      },
      {
        title: '设备列表高级筛选添加鸿蒙3.0筛选'
      }
    ],
    con: getCon(
      'ZhouYixun',
      'aoliaoaoaojiao',
      'dongyi0412',
      'weixiao12345',
      'ChaseWindWu'
    )
  },
  {
    version: 'v1.5.0-rc',
    time: '2022/8/28',
    feat: [
      {
        title: '新增复制用例功能',
        url: 'https://sonic-cloud.wiki/d/1226'
      },
      {
        title: '新增复制步骤功能',
        url: 'https://sonic-cloud.wiki/d/1388'
      }
    ],
    fix: [
      {
        title: '修复部分华为系统远控失效的问题',
        url: 'https://sonic-cloud.wiki/d/1436'
      },
      {
        title: '修复Agent重连后偶现Bug'
      },
      {
        title: '修复机器人通知通过率异常的Bug'
      },
      {
        title: '修复编辑公共步骤步骤时的显示问题',
        url: 'https://sonic-cloud.wiki/d/1483'
      },
      {
        title: '修复选择设备覆盖时，全局参数分配不正确的问题',
        url: 'https://sonic-cloud.wiki/d/1366'
      },
      {
        title: '前端高级筛选优化，支持鸿蒙系统筛选'
      },
      {
        title: 'sgm依赖更新'
      }
    ],
    con: getCon(
      'ZhouYixun',
      'yaming116',
      'mengerya',
      'dongyi0412',
      'weixiao12345'
    )
  },
  {
    version: 'v1.5.0-beta',
    time: '2022/8/21',
    feat: [
      {
        title: 'iOS远控新增剪贴板操作',
        url: 'https://sonic-cloud.wiki/d/961'
      },
      {
        title: 'iOS远控新增进程实时查看'
      },
      {
        title: 'iOS远控新增投屏自定义清晰度与FPS'
      },
      {
        title: 'iOS远控新增键盘输入'
      },
      {
        title: 'iOS远控投屏流畅度增加'
      },
      {
        title: 'iOS新增步骤：键盘输入'
      },
      {
        title: '安卓远控新增可主动校准横竖屏',
        url: 'https://sonic-cloud.wiki/d/1266'
      },
      {
        title: '安卓新增步骤：清空app缓存内存'
      },
      {
        title: '安卓新增步骤：自定义keycode输入',
        url: 'https://sonic-cloud.wiki/d/1263-androidui'
      },
      {
        title: '新增鸿蒙系统单独分离展示'
      },
      {
        title: 'sonic新生态sonic-driver-core第一期'
      },
      {
        title: 'sib添加截图功能'
      },
      {
        title: 'sib添加文件管理功能，支持mkdir、tree、ls等等操作'
      },
      {
        title: 'sib添加进程查看相关'
      },
      {
        title: '控件元素列表新增可通过控件值筛选',
        url: 'https://sonic-cloud.wiki/d/1381-cny'
      }
    ],
    fix: [
      {
        title: '修复Jenkins插件接口超时问题',
        url: 'https://sonic-cloud.wiki/d/1154-jenkins'
      },
      {
        title: 'iOS模块弃用appium'
      },
      {
        title: '优化iOS触控，解决断触问题'
      },
      {
        title: 'iOSUI自动化稳定性增强'
      },
      {
        title: '修复Jenkins子节点路径查找包失败问题',
        url: 'https://sonic-cloud.wiki/d/1154-jenkins'
      },
      {
        title: '修复ios特殊情况下获取app列表时导致前端错位的bug'
      },
      {
        title: '修复sib自动挂载与xctest进程冲突问题'
      },
      {
        title: '修复设备高级筛选同时选中安卓与iOS时，不能同时生效的bug'
      },
      {
        title: '修复scrcpy模式下安卓快速截图长宽与实际设备分辨率不符',
        url: 'https://sonic-cloud.wiki/d/1359'
      },
      {
        title: 'fastjson依赖升级'
      },
      {
        title: '修复安卓使用AndroidUIAutomator方式定位时，误报了错误的问题',
        url: 'https://sonic-cloud.wiki/d/1395-cny'
      },
      {
        title: '修复安卓13获取设备横竖屏API失败的问题'
      },
      {
        title: '优化Docker版Agent接入iOS显示usbmuxd连接问题'
      }
    ],
    con: getCon(
      'ZhouYixun',
      'aoliaoaoaojiao',
      'yaming116',
      'Lewage59',
      'mengerya',
      'spalagu'
    )
  },
  {
    version: 'v1.4.1-release',
    time: '2022/7/10',
    feat: [
      {
        title: '支持企业微信机器人'
      }
    ],
    fix: [
      {
        title: '修复Agent高温预警机器人配置失效的问题',
        url: 'https://sonic-cloud.wiki/d/1026-agentwebhooksecretwebhook'
      },
      {
        title: '修复从安装包管理列表安装时报错问题'
      },
      {
        title: '修复用户管理多出删除按钮的问题'
      },
      {
        title: '修复角色选择下拉框显示不全的问题'
      },
      {
        title: '修复iOS清晰度过高导致卡顿问题'
      },
      {
        title: '修复ws数据量过大造成断连的问题',
        url: 'https://sonic-cloud.wiki/d/1055'
      },
      {
        title: '更改接口文档部分描述错误'
      },
      {
        title: '安装包列表添加Jenkins插件提示'
      },
      {
        title: '修复高温预警缺少飞书机器人类型'
      }
    ],
    con: getCon('ZhouYixun', 'yaming116')
  },
  {
    version: 'v1.4.1-rc',
    time: '2022/7/2',
    feat: [
      {
        title: '新增安装包管理与Jenkins插件'
      },
      {
        title: '安装步骤优化：可从安装包列表安装'
      },
      {
        title: '新增UIAutomator原生定位'
      }
    ],
    fix: [
      {
        title: '修复SERVER_PORT与env配置冲突与Docker版Agent端口占用问题',
        url: 'https://sonic-cloud.wiki/d/951'
      },
      {
        title: '优化扫描权限配置逻辑',
        url: 'https://sonic-cloud.wiki/d/956-agent-notfoundresource'
      },
      {
        title: '补充部分品牌图片展示',
        url: 'https://sonic-cloud.wiki/d/932-logo'
      },
      {
        title: '修复通知机器人跳转链接空白问题',
        url: 'https://sonic-cloud.wiki/d/977'
      },
      {
        title: '修复鉴权按钮打开后失效的问题',
        url: 'https://sonic-cloud.wiki/d/983'
      },
      {
        title: '修复选择控件翻页时造成筛选条件消失的问题',
        url: 'https://sonic-cloud.wiki/d/969'
      },
      {
        title: '修复agent长时间不通信偶断的问题'
      },
      {
        title: '修复获取agent端的图片失败的问题',
        url: 'https://sonic-cloud.wiki/d/1011'
      }
    ],
    con: getCon('ZhouYixun', 'yaming116', 'hellojuly')
  },
  {
    version: 'v1.4.1-beta',
    time: '2022/6/22',
    feat: [
      {
        title: '接口鉴权管理',
        url: 'https://sonic-cloud.wiki/d/457-web'
      },
      {
        title: '用户角色配置',
        url: 'https://sonic-cloud.wiki/d/457-web'
      },
      {
        title: '角色管理'
      },
      {
        title: '公共步骤复制功能'
      },
      {
        title: '控件元素复制功能',
        url: 'https://sonic-cloud.wiki/d/795'
      },
      {
        title: '安卓远控新增获取当前wifi'
      },
      {
        title: '安卓新增测试步骤：验证当前activity，验证控件属性'
      },
      {
        title: '安卓新增定位方式：accessibilityId与cssSelectorAndText'
      },
      {
        title: 'sib run wda新增–disable-mjpeg-proxy'
      },
      {
        title: 'sib新增ios屏幕旋转监听'
      }
    ],
    fix: [
      {
        title: 'iOS横屏点击问题修复'
      },
      {
        title: '修复apk安装失败的问题',
        url: 'https://sonic-cloud.wiki/d/851'
      },
      {
        title: '修复前端设备默认图片失效的问题',
        url: 'https://sonic-cloud.wiki/d/804'
      },
      {
        title: '修复部分机型启动Scrcpy时报错'
      },
      {
        title: '修复测试套件筛选出错的问题',
        url: 'https://github.com/SonicCloudOrg/sonic-client-web/pull/156'
      },
      {
        title: '简化部署步骤',
        url: 'https://github.com/SonicCloudOrg/sonic-client-web/issues/129'
      },
      {
        title: '部分错别字修改',
        url: 'https://sonic-cloud.wiki/d/879-webcron'
      }
    ],
    con: getCon(
      'ZhouYixun',
      'wzasd',
      'yaming116',
      'dongyi0412',
      'hellojuly',
      'RFlame'
    )
  },
  {
    version: 'v1.4.0-release',
    time: '2022/6/8',
    fix: [
      {
        title: '修复Agent连接云端Server失败的问题。',
        url: 'https://sonic-cloud.wiki/d/761'
      },
      {
        title: '修复Agent出现偶断的问题。'
      },
      {
        title: '修复前端切换路由时偶现卡死的问题。'
      },
      {
        title: '修复测试套件筛选时报错的问题。',
        url: 'https://sonic-cloud.wiki/d/802'
      },
      {
        title: '修复多设备同序列号导致的一系列问题。'
      }
    ],
    con: getCon('ZhouYixun', 'JayWenStar', 'yaming116')
  },
  {
    version: 'v1.4.0-rc',
    time: '2022/5/30',
    feat: [
      {
        title: '新增iOS获取App图标列表'
      },
      {
        title: '新增iOS模拟定位功能'
      },
      {
        title: '新增iOS系统日志实时查看'
      },
      {
        title: '新增自定义AppiumDriver是否自动初始化'
      }
    ],
    fix: [
      {
        title: '修复iOS控件获取超时问题'
      },
      {
        title: '修复部分iOS使用时出现【设备未连接，请检查！】的Bug',
        url: 'https://sonic-cloud.wiki/d/602-mac'
      },
      {
        title: '修复iOS远控App列表展示不全的Bug',
        url: 'https://sonic-cloud.wiki/d/699-ios'
      },
      {
        title: '修复测试套件列表没显示分页的Bug',
        url: 'https://sonic-cloud.wiki/d/495-10'
      },
      {
        title: '修复部分情况下Agent连接dubbo超时的问题'
      }
    ],
    con: getCon('ZhouYixun', 'JayWenStar')
  },
  {
    version: 'v1.4.0-beta',
    time: '2022/5/21',
    // des: "约5.18~5.28更新"
    feat: [
      {
        title: 'POCO控件获取，支持Unity3D、UE4、cocos2dx系列、Egret'
      },
      {
        title: 'LDAP用户接入支持'
      },
      {
        title: '设备电量展示'
      },
      {
        title: '国际化建设第一期'
      },
      {
        title: '自定义是否开放注册，自定义开放用户类型',
        url: 'https://github.com/SonicCloudOrg/sonic-server-simple/issues/80'
      },
      {
        title: '公共步骤编辑页面添加逻辑处理',
        url: 'https://sonic-cloud.wiki/d/490'
      },
      {
        title: '安卓文件互传',
        url: 'https://sonic-cloud.wiki/d/532'
      },
      {
        title: '新增包名可传入全局参数',
        url: 'https://sonic-cloud.wiki/d/429'
      },
      {
        title: '控件元素值可传入全局参数'
      },
      {
        title: 'sonic-android-apk重构'
      },
      {
        title: 'sgm新增证书生成逻辑'
      },
      {
        title: 'sib新增检测wda存在情况'
      },
      {
        title: 'sib更新ios电量获取'
      }
    ],
    fix: [
      {
        title: '修复物理查找功能失败的问题'
      },
      {
        title: '修复远程音频部分系统出现粘包的问题'
      },
      {
        title: '修复Scrcpy模式下快速截图失败和获取控件截图丢失的问题'
      },
      {
        title: '修复部分iOS无法启动wda的问题'
      },
      {
        title: '修复公共步骤引起的bug'
      },
      {
        title: '修复报告详情页显示【设备已删除】的问题'
      },
      {
        title: 'Agent在线状态校准'
      },
      {
        title: '设备在线状态校准——针对宕机丢失状态的情况'
      },
      {
        title: '用例状态传递错误的BUG',
        url: 'https://sonic-cloud.wiki/d/488-bugif'
      },
      {
        title: 'while循环无法强制中断的BUG',
        url: 'https://sonic-cloud.wiki/d/513-while'
      },
      {
        title: 'Scrcpy刷新卡死以及focus卡死问题修复'
      },
      {
        title: '增强appium稳定性，单独剥离用户自定义'
      },
      {
        title: '减少Scrcpy的CPU占用，优化接收逻辑'
      },
      {
        title: '弃用netty，改用dubbo作为Agent与Server通信协议'
      },
      {
        title: '修复公共步骤拖拽问题'
      }
    ],
    con: getCon('ZhouYixun', 'JayWenStar', 'Lewage59', 'wzasd', 'yaming116')
  },
  {
    version: 'v1.3.2-release',
    time: '2022/3/24',
    feat: [
      {
        title: 'Scrcpy投屏模式，支持与Minicap互相切换'
      },
      {
        title: 'Docker版Agent已开放'
      }
    ],
    fix: [
      {
        title: '修复Mac、Linux无法执行可执行文件问题（sib、抓包都无法使用）',
        url: 'https://sonic-cloud.wiki/d/229'
      },
      {
        title: '修复抓包时，wifi获取失败的问题'
      },
      {
        title: '为解决兼容问题，可以让用户手动配置安卓的wifi代理'
      },
      {
        title: '前端步骤拖拽问题修复',
        url: 'https://sonic-cloud.wiki/d/369-betabug'
      },
      {
        title: '修复if逻辑里公共步骤不生效问题'
      },
      {
        title: '修复if嵌套子步骤生成异常问题',
        url: 'https://sonic-cloud.wiki/d/375-if-if'
      }
    ],
    con: getCon('ZhouYixun', 'Roy2017', 'JayWenStar', 'Lewage59')
  },
  {
    version: 'v1.3.2-beta',
    time: '2022/3/19',
    feat: [
      {
        title: '在线代理抓包（支持安卓与iOS）',
        url: 'https://sonic-cloud.wiki/d/163'
      },
      {
        title: '自动化步骤新增if、else if、else、while逻辑处理',
        url: 'https://sonic-cloud.wiki/d/165-ifwhilefor'
      },
      {
        title: '新增自定义Appium启动端口'
      },
      {
        title: '用sib替换tidevice，脱离python环境，更简便部署'
      },
      {
        title: '新增步骤：设置全局步骤间隔时间'
      },
      {
        title: '新增步骤：断言控件是否存在',
        url: 'https://sonic-cloud.wiki/d/286'
      },
      {
        title: '支持删除离线设备',
        url: 'https://sonic-cloud.wiki/d/189-agent'
      },
      {
        title: '远控时暴露Appium远程地址'
      },
      {
        title: '编辑测试套件时，可以自定义拖拽测试用例顺序',
        url: 'https://sonic-cloud.wiki/d/226'
      },
      {
        title: 'iOS新增一键获取App列表'
      },
      {
        title: 'iOS新增快速启动App与一键卸载'
      },
      {
        title: '安卓物理按键步骤更新：新增ENTER与DELETE键',
        url: 'https://sonic-cloud.wiki/d/304-entersonicenter'
      },
      {
        title: '新增可远程终止运行Agent'
      }
    ],
    fix: [
      {
        title: '自动化逻辑变更：执行完用例不会自动退出被测App',
        url: 'https://sonic-cloud.wiki/d/229'
      },
      {
        title: '修复上传Apk或Ipa断流的问题',
        url: 'https://sonic-cloud.wiki/d/145'
      },
      {
        title: '修复安卓触控会发生偶断的问题'
      },
      {
        title: '修复安卓App列表部分应用消失的问题'
      },
      {
        title: '修复部分机型录屏时造成内存溢出'
      },
      {
        title: '修复设备中文名称不显示的bug'
      }
    ],
    con: getCon('ZhouYixun', 'JayWenStar', 'wzasd', 'Lewage59', 'cjlcgg')
  },
  {
    version: 'v1.3.1-release',
    time: '2022/2/24',
    feat: [
      {
        title: '新增远程音频传输（仅支持安卓10或以上）'
      },
      {
        title: '新增步骤：控件拖拽到控件',
        url: 'https://sonic-cloud.wiki/d/220-cnycny'
      }
    ],
    fix: [
      {
        title: '修复App列表部分设备的App中文名显示为乱码的Bug',
        url: 'https://sonic-cloud.wiki/d/196'
      },
      {
        title: '延长Appium安装apk超时时间'
      },
      {
        title: '修复App列表出现不完整的Bug',
        url: 'https://sonic-cloud.wiki/d/199'
      },
      {
        title: '修复重复进入报告详情页会导致右侧饼图消失的Bug',
        url: 'https://sonic-cloud.wiki/d/205'
      },
      {
        title: '修复Agent多次获取App列表后造成CPU过高的问题'
      },
      {
        title: '页面部分样式调整'
      },
      {
        title: '修复设备重启提示报错的Bug',
        url: 'https://sonic-cloud.wiki/d/73-ios'
      },
      {
        title: '兼容坚果手机logo',
        url: 'https://sonic-cloud.wiki/d/238-r2log'
      },
      {
        title: '尝试兼容华为p50以及部分坚果手机minicap不兼容问题',
        url: 'https://sonic-cloud.wiki/d/239'
      }
    ],
    con: getCon('ZhouYixun', 'JayWenStar', 'wzasd', 'Lewage59')
  },
  {
    version: 'v1.3.1-beta',
    time: '2022/2/11',
    feat: [
      {
        title: '新增app列表（仅安卓，下版本补上iOS）'
      },
      {
        title: '新增便捷打开app与一键卸载app （仅安卓，下版本补上iOS）'
      },
      {
        title: '远控过程的调试UI自动化新增强制中断按钮',
        url: 'https://github.com/SonicCloudOrg/sonic-client-web/issues/76'
      },
      {
        title: 'Sonic助手新增main action以及更新多个模块'
      },
      {
        title: 'Sonic助手新增异步处理PCM转ACC音频编码',
        url: 'https://github.com/SonicCloudOrg/sonic-android-apk/pull/22'
      }
    ],
    fix: [
      {
        title: '修复手机筛选条件为Agent时发生错误的Bug',
        url: 'https://sonic-cloud.wiki/d/164-agent'
      },
      {
        title: '修复测试详情页无数据时的Bug',
        url: 'https://github.com/SonicCloudOrg/sonic-client-web/issues/97'
      },
      {
        title: '修复设备并行测试的Bug',
        url: 'https://sonic-cloud.wiki/d/125'
      },
      {
        title: '修复录像重复上传Bug',
        url: 'https://github.com/SonicCloudOrg/sonic-agent/issues/114'
      },
      {
        title: '修复iOS公共模块未开放的问题',
        url: 'https://sonic-cloud.wiki/d/171-ios'
      },
      {
        title: '页面部分样式调整'
      },
      {
        title: '修复退出远控时，iDevice报错为空的问题'
      },
      {
        title: '再次修复删除项目时，删除失败的问题'
      },
      {
        title: '再修复部分机型获取设备温度失败的问题'
      },
      {
        title: '兼容部分新设备的中文名映射'
      },
      {
        title: '优化安装apk逻辑'
      },
      {
        title: '兼容HONOR品牌logo'
      },
      {
        title: 'nginx延长上传大文件通信超时时间',
        url: 'https://sonic-cloud.wiki/d/145-ios-50m'
      },
      {
        title: '再次修复全局参数为数组无法传参问题'
      }
    ],
    con: getCon('ZhouYixun', 'JayWenStar', 'wzasd', 'Lewage59')
  },
  {
    version: 'v1.3.0-release',
    time: '2022/1/19',
    fix: [
      {
        title: 'iOS远控优化，加快20%初始化Driver速度'
      },
      {
        title: '解决部分用户wda启动超时导致连接失败的问题',
        url: 'https://sonic-cloud.wiki/d/27'
      },
      {
        title: 'iOS获取控件速度优化'
      },
      {
        title: 'iOS设备监听优化，减少抢占的Bug概率'
      },
      {
        title: '兼容黑鲨手机logo'
      },
      {
        title: '更换前端播放器组件'
      },
      {
        title: '修复远控时过快退出导致session没有close的问题'
      },
      {
        title: '远控CPU占用优化',
        url: 'https://sonic-cloud.wiki/d/85'
      },
      {
        title: '更新ddmlib依赖、fastjson依赖',
        url: 'https://github.com/SonicCloudOrg/sonic-server-simple/issues/47'
      },
      {
        title: '修复图片挂载目录异常导致图片丢失的问题',
        url: 'https://github.com/SonicCloudOrg/sonic-server/issues/116'
      },
      {
        title: '修复步骤顺序拖动后，其他顺序也会变动的问题',
        url: 'https://sonic-cloud.wiki/d/57'
      },
      {
        title: '修复远控调试时，全局参数|没有分隔的问题'
      },
      {
        title: '再兼容一批小米设备投屏'
      }
    ],
    con: getCon('ZhouYixun', 'JayWenStar', 'Lewage59')
  },
  {
    version: 'v1.3.0-beta2',
    time: '2022/1/10',
    feat: [
      {
        title: '新增xpath语法推荐、ns语法推荐',
        url: 'https://github.com/SonicCloudOrg/sonic-client-web/issues/74'
      },
      {
        title:
          '兼容安卓9-11&MIUI11-12小米机型，安卓9-10部分vivo，安卓9-10部分LG投屏'
      },
      {
        title: '新增远程wda连接'
      },
      {
        title: '远控与appium彻底分离'
      },
      {
        title: 'iOS控件树信息完善'
      },
      {
        title: 'iOS中心坐标展示'
      }
    ],
    fix: [
      {
        title: '再次修复部分用户不显示电量问题（仅安卓）'
      },
      {
        title: '数据库整体迁移mybatis',
        url: 'https://github.com/SonicCloudOrg/sonic-server-simple/pull/27'
      },
      {
        title: '修复执行测试状态变更问题',
        url: 'https://github.com/SonicCloudOrg/sonic-server-simple/pull/34'
      },
      {
        title: '修复多用例测试不稳定的问题'
      },
      {
        title: '修复公共步骤数量变多问题',
        url: 'https://github.com/SonicCloudOrg/sonic-server/issues/90'
      },
      {
        title: '修复全局参数数组传参问题',
        url: 'https://github.com/SonicCloudOrg/sonic-server/issues/101'
      },
      {
        title: '修复agent内存增高问题',
        url: 'https://github.com/SonicCloudOrg/sonic-agent/issues/85'
      },
      {
        title: 'cv迁移server处理，优化agent部署',
        url: 'https://github.com/SonicCloudOrg/sonic-server/issues/105'
      },
      {
        title: '新增努比亚，步步高，realme logo显示'
      },
      {
        title: '修复driver互相抢占问题',
        url: 'https://github.com/SonicCloudOrg/sonic-agent/issues/70'
      },
      {
        title: 'iOS部分细节优化，稍微下降画质来获得更高FPS'
      },
      {
        title: '调整了控件删除逻辑',
        url: 'https://github.com/SonicCloudOrg/sonic-server/issues/108'
      },
      {
        title: '修复翻页时，自动刷新导致回到第一页的问题',
        url: 'https://github.com/SonicCloudOrg/sonic-client-web/issues/75'
      },
      {
        title: '修复远控时切换关联项目，用例列表没有改变的问题',
        url: 'https://github.com/SonicCloudOrg/sonic-client-web/issues/45'
      }
    ],
    con: getCon('ZhouYixun', 'JayWenStar', 'Lewage59')
  },
  {
    version: 'v1.3.0-beta1.1',
    time: '2021/12/24',
    fix: [
      {
        title: '修复部分用户显示不出电池温度问题'
      },
      {
        title: '修复iOS的wda启动失败问题'
      },
      {
        title: '修复前端tab置灰不能点击的问题'
      }
    ],
    con: getCon('ZhouYixun')
  },
  {
    version: 'v1.3.0-beta1',
    time: '2021/12/24',
    feat: [
      {
        title: '新增电池温度监听（仅安卓）'
      },
      {
        title: '新增模拟电池拔插功能（仅安卓）'
      },
      {
        title: 'iOS在线调试与iOS自动化'
      },
      {
        title: 'iOS支持远程装ipa与siri命令'
      },
      {
        title: '支持设备中文映射'
      }
    ],
    fix: [
      {
        title: '部分厂商logo兼容'
      },
      {
        title: '修复设备状态为空时出现的bug'
      },
      {
        title: '修复windows不可运行iOS驱动的bug'
      },
      {
        title: '修复iOS没有分辨率的bug'
      },
      {
        title: '新增部分浏览器webview调试支持，例手机Chrome和Oppo自带浏览器'
      },
      {
        title: '修复安卓触控时出现socket偶断的bug'
      },
      {
        title: '修复直接刷新页面时造成socket断连的问题',
        url: 'https://github.com/SonicCloudOrg/sonic-agent/issues/100'
      },
      {
        title: '修复mac上无法使用adb connect功能',
        url: 'https://github.com/SonicCloudOrg/sonic-agent/issues/80'
      },
      {
        title: '修复低版本谷歌内核浏览器无法获取logcat问题',
        url: 'https://github.com/SonicCloudOrg/sonic-client-web/issues/69'
      },
      {
        title: '修复前端无法直接复制adb connect路径的问题',
        url: 'https://github.com/SonicCloudOrg/sonic-client-web/issues/66'
      },
      {
        title: '修复远控时造成用户无法登录的问题',
        url: 'https://github.com/SonicCloudOrg/sonic-server/issues/94'
      },
      {
        title: '优化获取屏幕数据失败的提示'
      },
      {
        title: '优化选择步骤的体验'
      },
      {
        title: '建设前端可变色图片组件',
        url: 'https://github.com/SonicCloudOrg/sonic-client-web/pull/70'
      }
    ],
    con: getCon('ZhouYixun', 'Roy2017', 'JayWenStar')
  },
  {
    version: 'v1.2.0-release',
    time: '2021/12/12',
    fix: [
      {
        title: 'iOS投屏与触控修复'
      },
      {
        title: 'iOS投屏FPS提高两倍'
      },
      {
        title: 'Github仓库与Docker仓库迁移'
      },
      {
        title: 'Agent改版准备'
      },
      {
        title: 'iOS投屏加入动画'
      },
      {
        title: 'Agent优化线程退出逻辑'
      }
    ],
    con: getCon('ZhouYixun')
  },
  {
    version: 'v1.2.0-rc',
    time: '2021/12/10',
    feat: [
      {
        title: '新增快速截图功能',
        url: 'https://github.com/SonicCloudOrg/sonic-client-web/issues/56'
      },
      {
        title: '新增远程adb调试功能',
        url: 'https://github.com/SonicCloudOrg/sonic-client-web/issues/57'
      },
      {
        title: '新增中断测试任务功能',
        url: 'https://github.com/SonicCloudOrg/sonic-agent/issues/64'
      },
      {
        title: '新增启动依赖检查',
        url: 'https://github.com/SonicCloudOrg/sonic-agent/issues/35'
      },
      {
        title: '新增设备备注'
      },
      {
        title: '新增占用用户展示',
        url: 'https://github.com/SonicCloudOrg/sonic-agent/issues/46'
      }
    ],
    fix: [
      {
        title: 'iOS投屏修复'
      },
      {
        title: '修复首页echarts偶然不出现的bug',
        url: 'https://github.com/SonicCloudOrg/sonic-server/issues/79'
      },
      {
        title: '前端修复控件元素获取后页面布局异常bug',
        url: 'https://github.com/SonicCloudOrg/sonic-client-web/pull/59'
      },
      {
        title: '修复chromedriver问题',
        url: 'https://github.com/SonicCloudOrg/sonic-server/issues/85'
      },
      {
        title: '降低cpu占用'
      },
      {
        title: '修复部分机型投屏时出现黑色区域',
        url: 'https://github.com/SonicCloudOrg/sonic-server/issues/89'
      },
      {
        title: '控件元素支持名称筛选',
        url: 'https://github.com/SonicCloudOrg/sonic-agent/issues/48'
      },
      {
        title: '远控切换布局时，加入动画',
        url: 'https://github.com/SonicCloudOrg/sonic-client-web/pull/60'
      },
      {
        title: '放开控件元素值字符长短限制',
        url: 'https://github.com/SonicCloudOrg/sonic-server/issues/86'
      },
      {
        title: '修复测试套件执行多次的bug',
        url: 'https://github.com/SonicCloudOrg/sonic-server/issues/87'
      },
      {
        title: '修复设备高级筛选的部分条件丢失的问题'
      }
    ],
    con: getCon('ZhouYixun', 'Roy2017', 'JayWenStar')
  },
  {
    version: 'v1.2.0-beta3',
    time: '2021/12/01',
    feat: [
      {
        title: 'iOS投屏与触控',
        url: 'https://github.com/SonicCloudOrg/sonic-agent/issues/32'
      },
      {
        title: 'iOS设备监听',
        url: 'https://github.com/SonicCloudOrg/sonic-agent/issues/32'
      },
      {
        title: '前端自定义布局与自定义投屏区域大小',
        url: 'https://github.com/SonicCloudOrg/sonic-client-web/issues/40'
      },
      {
        title: '新增生态：Sonic安卓助手，弃用minitouch'
      },
      {
        title: '新增物理查找功能'
      }
    ],
    fix: [
      {
        title: '修复cpu占用过高问题'
      },
      {
        title: '优化远控启动速度（提高80%）'
      },
      {
        title: '修复套件只运行一个测试的bug'
      },
      {
        title: '为节省资源消耗，chromedriver的debug port由用户自定义'
      },
      {
        title: '新增部分厂商图片'
      },
      {
        title: '前端优化用户体验，自动监听屏幕旋转与坐标'
      }
    ],
    con: getCon('ZhouYixun', 'Roy2017')
  },
  {
    version: 'v1.2.0-beta2',
    time: '2021/11/17',
    fix: [
      {
        title: '继续优化minicap流畅性，修复部分机型无法投屏的bug',
        url: 'https://github.com/SonicCloudOrg/sonic-agent/issues/54'
      },
      {
        title: '兼容部分机型的minitouch触控'
      },
      {
        title: '弃用redis'
      },
      {
        title: '弃用MQ，改用Netty传输数据'
      },
      {
        title: '新增Agent心跳检测，断线重连'
      },
      {
        title: '修复横屏坐标点击问题',
        url: 'https://github.com/SonicCloudOrg/sonic-server/issues/67'
      },
      {
        title: '优化设备管理体验',
        url: 'https://github.com/SonicCloudOrg/sonic-client-web/issues/41'
      },
      {
        title: '设备图片可以由用户自定义上传'
      },
      {
        title: 'Agent可拔插式配置更改'
      },
      {
        title: '录像处理逻辑修改，更快地结束测试'
      }
    ],
    con: getCon('ZhouYixun')
  },
  {
    version: 'v1.2.0-beta1',
    time: '2021/11/10',
    fix: [
      {
        title:
          '提高minicap两倍的fps，更加流畅的投屏体验。略微下降了投屏消耗的带宽，更改投屏时二进制数据获取逻辑'
      },
      {
        title: '优化不兼容投屏的机型提示，同时兼容安卓6荣耀'
      },
      {
        title: '优化获取控件需要driver初始化提示'
      },
      {
        title: '修复关联项目前应该屏蔽新增用例按钮'
      },
      {
        title: '更改nginx默认配置，放开上传文件限制'
      },
      {
        title: 'push文件逻辑更改'
      },
      {
        title: '兼容部分机型的webview'
      },
      {
        title: '体验版redis可配置密码',
        url: 'https://github.com/SonicCloudOrg/sonic-server/issues/65'
      },
      {
        title: 'minicap兼容安卓12'
      },
      {
        title: 'xpath定位逻辑修改'
      },
      {
        title: '修复Linux打开chromedriver出现未知错误问题'
      },
      {
        title: '更新Appium依赖到v7.6.0'
      }
    ],
    con: getCon('ZhouYixun')
  },
  {
    version: 'v1.1.0',
    time: '2021/11/3',
    feat: [
      {
        title: '支持在线WebView调试',
        url: 'https://github.com/SonicCloudOrg/sonic-agent/issues/33'
      },
      {
        title: '支持adb输入中文字符',
        url: 'https://github.com/SonicCloudOrg/sonic-server/issues/60'
      },
      {
        title: '支持上传二维码到设备相册',
        url: 'https://github.com/SonicCloudOrg/sonic-server/issues/59'
      },
      {
        title: '支持远程装包到设备',
        url: 'https://github.com/SonicCloudOrg/sonic-agent/issues/43'
      },
      {
        title: '支持远程adb shell'
      },
      {
        title: '支持在线查看logcat'
      },
      {
        title: '支持飞书机器人',
        url: 'https://github.com/SonicCloudOrg/sonic-server/issues/51'
      }
    ],
    fix: [
      {
        title: '远控流畅度优化，减少60%带宽',
        url: 'https://github.com/SonicCloudOrg/sonic-agent/issues/39'
      },
      {
        title: '部分机型横屏不能旋转，已增加校准按钮',
        url: 'https://github.com/SonicCloudOrg/sonic-agent/issues/38'
      },
      {
        title: '修复公共步骤部分删除与编辑逻辑',
        url: 'https://github.com/SonicCloudOrg/sonic-server/issues/61'
      },
      {
        title: '修复8200端口占用问题'
      },
      {
        title: '修复路径包含中文文件上传报400的问题'
      },
      {
        title: '修复显示发送shell失败的乱码问题'
      },
      {
        title: '优化获取控件逻辑，使得获取控件速度加快70%'
      },
      {
        title: '部署体验优化，暴露配置在外部引入的方式'
      },
      {
        title: '兼容部分机型图片'
      }
    ],
    con: getCon('ZhouYixun')
  },
  {
    version: 'v1.0.0',
    time: '2021/10/16',
    feat: [
      {
        title:
          '支持安卓、iOS 设备（iOS 开发完成，正在测试中，下个版本正式发布）'
      },
      {
        title: '支持 Linux、Windows、Mac 部署（支持全 Docker 部署）'
      },
      {
        title: '0 编码执行 UI 自动化测试'
      },
      {
        title: '友好的 UI 交互，一键远控'
      },
      {
        title: '一键任务下发，全球设备执行测试'
      },
      {
        title: '一键获取设备控件树，马上保存，马上使用'
      },
      {
        title: '维护简单便捷，随意拖拽'
      },
      {
        title: '保存公共步骤，自定义前后置操作'
      },
      {
        title: '多种图像识别技术保驾护航，为您解决 UI 自动化烦恼'
      },
      {
        title:
          '自研随机事件算法（类 monkey），UI 遍历算法（Doing） 更可控，更稳定'
      },
      {
        title: '测试结果友好展示，测试截图，日志，录像全方位展示'
      },
      {
        title: '支持接入钉钉、飞书、企业微信机器人'
      }
    ],
    con: getCon('ZhouYixun')
  }
] as VersionRecord[]
