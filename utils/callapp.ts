import { isAndroid } from "@/utils/tools";
import ClientConfig from "@/client.config";

let timer = null;
let timerAndroid = null;
let timerIos = null;

const downLoadUrl = 'xxxxxxxx'
// 下载逻辑：
// 在不同页面扫码或点击下载，如用户已有快应用或者有客户端，则优先打开对应页面。
// 如没有则拉起快应用，拉起失败，记录入落地页下载APP后进入对应页面
// 如：在PC/WAP端的A书书籍详情页拉起快应用或客户端时仍进入A书的书籍详情页
// 下载app -- 付费章节需引导打开快应用，拉起失败则自动下载APP。

export const downloadApp = () => {
  if(isAndroid(window.navigator.userAgent)) {
    window.location.href = ClientConfig.android.quickapp;
    timerAndroid = setTimeout(() => {
      checkOpen(ClientConfig.android.apk)
    }, 3000);
  } else {
    window.location.href = ClientConfig.ios.scheme;
    timerIos = setTimeout(() => {
      checkOpen(ClientConfig.ios.shop)
    }, 3000);
  }
}



// 下载app
function checkOpen(downloadUrl: string) {
  timer = setTimeout(function () {
    var hidden = isPageHidden();
    if (!hidden) {
      // 下载app
      downloadFile(downloadUrl)
    }
  }, 0);
  const visibilityChangeProperty = getVisibilityChangeProperty();
  if (!visibilityChangeProperty) {
    clearTimeout(timer);
    clearTimeout(timerAndroid);
    clearTimeout(timerIos);
  } else {
    document.addEventListener(visibilityChangeProperty as string,evFn);
  }
  // 解绑事件
  window.onpagehide = function () {
    clearTimeout(timer);
  };
}
var evFn = function (e) {
  console.log('e========>', e);
  clearTimeout(timer);
  clearTimeout(timerAndroid);
  clearTimeout(timerIos);
}

/**
 * 判断页面是否隐藏（进入后台）
 */
function isPageHidden() {
  var prefix = getPagePropertyPrefix();
  if (prefix === false) return false;

  var hiddenProperty = prefix ? prefix + 'Hidden' : 'hidden';
  return document[hiddenProperty];
}
/**
 * 获取判断页面 显示|隐藏 状态改变的属性
 */
function getVisibilityChangeProperty() {
  var prefix = getPagePropertyPrefix();
  if (prefix === false) return false;

  return prefix + 'visibilitychange';
}
/**
 * 获取页面隐藏属性的前缀
 * 如果页面支持 hidden 属性，返回 '' 就行
 * 如果不支持，各个浏览器对 hidden 属性，有自己的实现，不同浏览器不同前缀，遍历看支持哪个
 */
function getPagePropertyPrefix() {
  var prefixes = ['webkit', 'moz', 'ms', 'o'];
  var correctPrefix;
  if ('hidden' in document) return '';

  prefixes.forEach((prefix) => {
    if (prefix + 'Hidden' in document) {
      correctPrefix = prefix;
    }
  });
  return correctPrefix || false;
}


function downloadFile(url) {
  if(isAndroid(window.navigator.userAgent)) {
    const a = document.createElement("a");
    a.download = '下载小说app.apk';
    a.href = url;
    document.body.appendChild(a); // 修复firefox中无法触发click
    a.click();
    document.body.removeChild(a)
  } else {
    window.location.href = url
  }
}
