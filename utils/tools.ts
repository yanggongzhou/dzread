/**
 * 判断pc wap
 */
export const ownOs = function (ua: string) {
  const isWindowsPhone = /(?:Windows Phone)/.test(ua),
    isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
    isAndroid = /(?:Android)/.test(ua),
    isFireFox = /(?:Firefox)/.test(ua),
    isChrome = /(?:Chrome|CriOS)/.test(ua),
    isTablet = /(?:iPad|PlayBook|iPod)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
    isPhone = /(?:iPhone)/.test(ua) && !isTablet,
    isPc = ua && !isPhone && !isAndroid && !isSymbian,
    isWindows = /Windows/.test(ua),
    isMacOS = /Mac OS X/.test(ua);
  // if (isAndroid || isPhone) {
  //   console.log("手机")
  // } else if (isPc) {
  //   console.log("电脑")
  // }
  return {
    isTablet: isTablet,
    isPhone: isPhone,
    isAndroid: isAndroid,
    isPc: !!isPc,
    isMobile: isPhone || isAndroid || isSymbian,
  };
};
/**
 * 判断ios
 */
export const isIos = (ua: string) => {
  const isMac = /macintosh|mac_powerpc|mac os x/i.test(ua.toLowerCase());
  const isPhone = /\(i[^;]+;( U;)? CPU.+Mac OS X/.test(ua) || /ios|iphone|ipad|ipod/.test(ua.toLowerCase())
  return isMac || isPhone;
}
/**
 * 判断android
 */
export const isAndroid = (ua: string) => /AppleWebKit.*Mobile.*/.test(ua) && (/android/.test(ua.toLowerCase()) || ua.indexOf('Adr') > -1);
/**
 * 节流
 */
export function throttle(t: number, fn: Function) {
  let last
  let timer
  let interval = t || 500
  return function () {
    let args = arguments
    let now = + new Date()
    //等待执行
    if (last && now - last < interval) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        last = now
      }, interval)
    } else {
      fn.apply(this, args) //立即执行，则在wait毫秒内开始时执行
      last = now
    }
  }
}
/**
 * 随机16位id
 */
export const randomString = (): string => {
  const len = 16;
  const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  /** **默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  const maxPos = $chars.length;
  let pwd = '';
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}
/**
 * ip格式正则
 */
export const ipReg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
