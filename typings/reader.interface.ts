export enum EOperateType {
  normal = 0,
  catalog = 1,
  setting = 2,
  qrcode = 3,
}

export enum EThemeType {
  default1 = '#F3F3F3',
  default2 = '#E7F0E0',
  default3 = '#DBE0E7',
  default4 = "#EFD8D0",
  default5 = "#D9E0E8",


  pc1 = "#EBEFF5",
  pc2 = "#F0E9D7",
  pc3 = "#F6E8EB",
  pc4 = "#EFF6EB"
}


export const EThemePcBg = {
  [EThemeType.pc1]: "#D1D6DC",
  [EThemeType.pc2]: "#E1D7C1",
  [EThemeType.pc3]: "#E6D6D9",
  [EThemeType.pc4]: "#E1E9DA",
}
