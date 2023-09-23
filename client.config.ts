import { ELanguage } from "@/typings/home.interface";

const ClientConfig = {
  name: "DramaBox",
  companyName: "北京点众科技股份有限公司",
  productName: "db",
  googleCode: "G-BXDJ8KNG7N",
  baiduCode: "ab19911ff0c788613a31e85bb39089e2xxxx",
  email: "dramaboxapp@gmail.com",
  ios: {
    deeplink: "https://app.dramaboxdb.com/ios/open?c=",
    pname: "com.storymatrix.drama",
    link: "https://apps.apple.com/us/app/id6445905219",
    channelCode: "DISEO1000000",
  },
  android: {
    pname: "com.storymatrix.drama",
    link: "https://play.google.com/store/apps/details?id=com.storymatrix.drama",
    channelCode: "DASEO1000000",
  },
  logDataType: "dramabox",
  netHiveLink: "https://log.dramaboxdb.com/h5_stand_final_log.php"
}

export default ClientConfig;

export const LanguageDefaultBookId = {
  [ELanguage.ZhHans]: '41000100369', // 简体：41000100369 爱你心动为止
  [ELanguage.Zh]: '41000100354', // 繁体：41000100354 離婚後冷爺他知錯了
  [ELanguage.English]: '41000100599', // 英语：41000100599 Sleeping Handsome, Let's Mate!
  [ELanguage.Korean]: '41000100396', // 韩语：41000100396 내 와이프는 쾌걸 의사
}
