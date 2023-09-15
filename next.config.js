/** @type {import('next').NextConfig} */
const path = require("path");
// 网站域名
const WebDomainObj = {
  test: 'http://192.168.1.70:3000',
  staging: 'https://yfbinfo.dramaboxdb.com',
  prod: 'https://www.dramaboxdb.com'
}
// 网站服务api
const BaseUrlObj = {
  test: 'http://192.168.0.253:8080',
  // test: 'http://192.168.1.70:8080',
  staging: 'https://yfbwww.webfic.com',
  prod: 'https://www.webfic.com'
}
// ipua
const IpUaUrlObj = {
  // https://hotdrama.hw.dzods.cn/drama-box
  test: 'https://drama.hw.dzods.cn/drama-box/ad/cache/ua',
  staging: 'https://yfbapi.dramaboxdb.com/drama-box/ad/cache/ua',
  prod: 'https://api.dramaboxdb.com/drama-box/ad/cache/ua'
}

/** ⬇⬇⬇⬇⬇⬇✨✨✨✨✨✨ 环境,手动更换 ✨✨✨✨✨✨⬇⬇⬇⬇⬇⬇*/
const environment = 'test'; // 部署环境 "test" | "staging" | "prod"
/** ⬆⬆⬆⬆⬆⬆✨✨✨✨✨✨ ℹℹℹℹℹℹℹℹℹℹ ✨✨✨✨✨✨⬆⬆⬆⬆⬆⬆ */
const buildId = 'dzread-010001'; // 构建ID
const WebDomain = WebDomainObj[environment]
const BaseUrl = BaseUrlObj[environment]
const IpUaUrl = IpUaUrlObj[environment]

console.log('\x1B[44m%s\x1B[49m', '-------------------------- ✨ ✨ ✨ ✨ ✨ ✨ --------------------------')
console.log('\x1B[34m%s\x1B[39m', '部署环境:', environment, '构建ID:', buildId)
console.log('\x1B[34m%s\x1B[39m', '网站域名:', WebDomain)
console.log('\x1B[34m%s\x1B[39m', 'API:', BaseUrl)
console.log('\x1B[34m%s\x1B[39m', 'IPUA:', IpUaUrl)
console.log('\x1B[44m%s\x1B[49m', '-------------------------- ✨ ✨ ✨ ✨ ✨ ✨ --------------------------')

const nextConfig = {
  reactStrictMode: true,
  // Configuring the Build ID
  generateBuildId: async () => {
    return buildId;
  },
  transpilePackages: ['antd-mobile'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "common.module.scss";`
  },
  // https://www.nextjs.cn/docs/upgrading
  swcMinify: true,
  images: { // 远程图片资源域名
    domains: [
      "bookimg.klynf.com",
      "reshot.hw.dzods.cn",
      "res.webfic.com",
      "res.novelread.com",
      "res.dramabox.com",
      "nas2osstest.wpzkj.cn",
      "nchapter.dramaboxdb.com",
      "nbookimg.klynf.com",
    ],
  },
  // 环境配置
  env: {
    BaseUrl,
    WebDomain,
    IpUaUrl,
  },
  // 参考 https://nextjs.org/docs/messages/swc-disabled
  experimental: {
    forceSwcTransforms: true,
  },
}

module.exports = nextConfig;

