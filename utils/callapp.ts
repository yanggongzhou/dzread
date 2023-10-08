import { isAndroid } from "@/utils/tools";

var timer = null;

const downLoadUrl = 'xxxxxxxx'
// 下载app
function checkOpen() {
  timer = setTimeout(function () {
    var hidden = isPageHidden();
    if (!hidden) {
      // 下载app
      downloadFile(downLoadUrl)
    }
  }, 0);
  const visibilityChangeProperty = getVisibilityChangeProperty();
  if (!visibilityChangeProperty) {
    clearTimeout(timer);
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
  if(isAndroid) {
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
