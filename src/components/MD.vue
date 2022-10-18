<script setup>
import Project from '../markdown/doc/doc-project.md';
import Robot from '../markdown/doc/doc-robot.md';
import Agent from '../markdown/doc/doc-agent.md';
import Cases from '../markdown/doc/doc-cases.md';
import Control from '../markdown/doc/doc-control.md';
import Device from '../markdown/doc/doc-device.md';
import Element from '../markdown/doc/doc-element.md';
import Global from '../markdown/doc/doc-global.md';
import Proxy from '../markdown/doc/doc-proxy.md';
import Pub from '../markdown/doc/doc-pub.md';
import Quartz from '../markdown/doc/doc-quartz.md';
import Result from '../markdown/doc/doc-result.md';
import Run from '../markdown/doc/doc-run.md';
import Steps from '../markdown/doc/doc-steps.md';
import Suite from '../markdown/doc/doc-suite.md';
import Terminal from '../markdown/doc/doc-terminal.md';
import Version from '../markdown/doc/doc-version.md';
import Webview from '../markdown/doc/doc-webview.md';
import BackEndDeploy from '../markdown/deploy/back-end-deploy.md';
import AgentDeploy from '../markdown/deploy/agent-deploy.md';
import AndroidDeploy from '../markdown/deploy/android-deploy.md';
import IOSDeploy from '../markdown/deploy/ios-deploy.md';
import UpgradeDeploy from '../markdown/deploy/upgrade-deploy.md';
import Module from '../markdown/doc/doc-module.md';
import DevSIB from '../markdown/sib/dev-sib.md'
import ReSIB from '../markdown/sib/re-sib.md'
import DeviceSIB from '../markdown/sib/sib-device.md'
import AppSIB from '../markdown/sib/sib-app.md'
import BatterySIB from '../markdown/sib/sib-battery.md'
import RunSIB from '../markdown/sib/sib-run.md'
import RebootSIB from '../markdown/sib/sib-reboot.md'
import CrashSIB from '../markdown/sib/sib-crash.md'
import SysLogSIB from '../markdown/sib/sib-syslog.md'
import ProxySIB from '../markdown/sib/sib-proxy.md'
import ConRe from '../markdown/contribute/con-re.md'
import ConServer from '../markdown/contribute/con-server.md'
import ConClient from '../markdown/contribute/con-client.md'
import ConAgent from '../markdown/contribute/con-agent.md'
import LocationSIB from '../markdown/sib/sib-location.md'
import ReSAA from '../markdown/saa/re-saa.md'
import DevSAA from '../markdown/saa/dev-saa.md'
import OrientationSIB from '../markdown/sib/sib-orientation.md'
import ReSCH from '../markdown/sch/re-sch.md'
import DevSCH from '../markdown/sch/dev-sch.md'
import ReSGM from "../markdown/sgm/re-sgm.md"
import DevSGM from '../markdown/sgm/dev-sgm.md'
import UploadSCH from '../markdown/sch/sch-upload.md'
import PsSIB from '../markdown/sib/sib-ps.md'
import ScreenSIB from '../markdown/sib/sib-screen.md'
import AfcSIB from '../markdown/sib/sib-afc.md'
import MountSIB from '../markdown/sib/sib-mount.md'
import PerfSIB from '../markdown/sib/sib-perf.md'
import WebInspectorSIB from '../markdown/sib/sib-webinspector.md'
import RunScript from '../markdown/doc/doc-script.md'
import ElementManage from '../markdown/doc/doc-element-manage.md'

defineProps({
  active: String
})

</script>
<template>
  <div class="md-show">
    <project v-if="active==='project'"/>
    <robot v-if="active==='robot'"/>
    <agent v-if="active==='agent-center'"/>
    <cases v-if="active==='cases'"/>
    <control v-if="active==='control'"/>
    <device v-if="active==='device'"/>
    <element v-if="active==='element'"/>
    <global v-if="active==='global'"/>
    <proxy v-if="active==='proxy'"/>
    <pub v-if="active==='pub'"/>
    <quartz v-if="active==='quartz'"/>
    <result v-if="active==='result'"/>
    <run v-if="active==='run'"/>
    <steps v-if="active==='steps'"/>
    <suite v-if="active==='suite'"/>
    <terminal v-if="active==='terminal'"/>
    <version v-if="active==='version'"/>
    <webview v-if="active==='webview'"/>
    <back-end-deploy v-if="active==='back-end'"/>
    <agent-deploy v-if="active==='agent'"/>
    <i-o-s-deploy v-if="active==='ios'"/>
    <android-deploy v-if="active==='android'"/>
    <module v-if="active==='module'"/>
    <device-s-i-b v-if="active==='sib-device'"/>
    <app-s-i-b v-if="active==='sib-app'"/>
    <dev-s-i-b v-if="active==='dev-sib'"/>
    <re-s-i-b v-if="active==='re-sib'"/>
    <battery-s-i-b v-if="active==='sib-battery'"/>
    <reboot-s-i-b v-if="active==='sib-reboot'"/>
    <run-s-i-b v-if="active==='sib-run'"/>
    <crash-s-i-b v-if="active==='sib-crash'"/>
    <sys-log-s-i-b v-if="active==='sib-syslog'"/>
    <proxy-s-i-b v-if="active==='sib-proxy'"/>
    <upgrade-deploy v-if="active==='upgrade'"/>
    <con-re v-if="active==='con-re'"/>
    <con-server v-if="active==='con-server'"/>
    <con-client v-if="active==='con-client'"/>
    <con-agent v-if="active==='con-agent'"/>
    <location-s-i-b v-if="active==='sib-location'"/>
    <re-s-a-a v-if="active==='re-saa'"/>
    <dev-s-a-a v-if="active==='dev-saa'"/>
    <orientation-s-i-b v-if="active==='sib-orientation'"/>
    <re-s-c-h v-if="active==='re-sch'"/>
    <dev-s-c-h v-if="active==='dev-sch'"/>
    <re-s-g-m v-if="active==='re-sgm'"/>
    <dev-s-g-m v-if="active==='dev-sgm'"/>
    <upload-s-c-h v-if="active==='sch-upload'"/>
    <ps-s-i-b v-if="active==='sib-ps'"/>
    <screen-s-i-b v-if="active==='sib-screen'"/>
    <afc-s-i-b v-if="active==='sib-afc'"/>
    <mount-s-i-b v-if="active==='sib-mount'"/>
    <perf-s-i-b v-if="active==='sib-perf'"/>
    <web-inspector-s-i-b v-if="active==='sib-webinspector'"/>
    <run-script v-if="active==='runScript'"/>
    <element-manage v-if="active==='element-manage'"/>
  </div>
</template>

<style>
.md-show {
  text-align: left;
  margin-left: 200px;
  margin-bottom: 80px;
}

@media screen and (max-width: 820px) {
  .md-show {
    margin-left: 0;
    padding: 0 14px;
  }
}
</style>
