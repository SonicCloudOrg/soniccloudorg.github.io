// 新老 URL 映射表
export default {
  //首页
  '/home': '/',

  //部署
  '/deploy': '/deploy/back-end-deploy.html',
  '/deploy?tag=back-end': '/deploy/back-end-deploy.html',
  '/deploy?tag=agent': '/deploy/agent-deploy.html',
  '/deploy?tag=upgrade': '/deploy/upgrade-deploy.html',
  '/deploy?tag=android': '/deploy/android-deploy.html',
  '/deploy?tag=ios': '/deploy/ios-deploy.html',

  //使用
  '/document': '/doc/doc-use.html',
  '/document?tag=use': '/doc/doc-use.html',
  '/document?tag=high': '/doc/doc-high.html',
  '/document?tag=agent-center': '/doc/doc-agent.html',
  '/document?tag=device': '/doc/doc-device.html',
  '/document?tag=control': '/doc/doc-control.html',
  '/document?tag=app-list': '/doc/doc-app-list.html',
  '/document?tag=webview': '/doc/doc-webview.html',
  '/document?tag=quick-cap': '/doc/doc-quick-cap.html',
  '/document?tag=terminal': '/doc/doc-terminal.html',
  '/document?tag=proxy': '/doc/doc-proxy.html',
  '/document?tag=element': '/doc/doc-element.html',
  '/document?tag=run': '/doc/doc-run.html',
  '/document?tag=runScript': '/doc/doc-script.html',
  '/document?tag=poco': '/doc/doc-poco.html',
  '/document?tag=toWebView': '/doc/doc-to-webview.html',
  '/document?tag=keyboard': '/doc/doc-keyboard.html',
  '/document?tag=element-manage': '/doc/doc-element-manage.html',
  '/document?tag=cases': '/doc/doc-cases.html',
  '/document?tag=steps': '/doc/doc-steps.html',
  '/document?tag=pub': '/doc/doc-pub.html',
  '/document?tag=global': '/doc/doc-global.html',
  '/document?tag=suite': '/doc/doc-suite.html',
  '/document?tag=quartz': '/doc/doc-quartz.html',
  '/document?tag=result': '/doc/doc-result.html',
  '/document?tag=project': '/doc/doc-project.html',
  '/document?tag=robot': '/doc/doc-robot.html',
  '/document?tag=version': '/doc/doc-version.html',
  '/document?tag=module': '/doc/doc-module.html',

  //开发
  '/contribute': '/contribute/con-re.html',
  '/contribute?tag=con-re': '/contribute/con-re.html',
  '/contribute?tag=con-server': '/contribute/con-server.html',
  '/contribute?tag=con-client': '/contribute/con-client.html',
  '/contribute?tag=con-agent': '/contribute/con-agent.html',

} as Record<string, string>
