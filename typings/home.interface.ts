export enum EHomeStyle {
  small = 'SMALL_CARD_LIST',
  big = 'BIG_CARD_COMBINATION',
}

export enum EnumPosition {
  顶部banner = 0,
  熱銷好文 = 1,
  好評佳作 = 2,
  排行榜 = 3,
  大神好文 = 4,
  主編力薦 = 5,
  今日必讀 = 6,
  火熱推薦 = 7,
  CustomInset = 8
}

export interface INetHomeItem {
  position: EnumPosition;
  bookList: IBookItem[]
  columns?: INetHomeItem[]
}

export interface IBookItem {
  name: string;
  actionType: string;
  action: string;
  chapterCount: number;
  ratings: number;
  bookId: string;
  bookName: string;
  author: string;
  introduction: string;
  cover: string;
  tags: string[];
  viewCount: number;
  lastUpdateTime: string;
  writeStatus: string; // COMPLETE
  viewCountDisplay: string;
  lastUpdateTimeDisplay: string;
  replacedBookName: string;
  firstChapterId?: string;
  columnName: string;
  typeTwoNames: string[];
  typeTwoName: string;
  typeTwoIds: string[];
}

export enum ELanguage {
  English = 'en',
  ZhHans = 'zhHans', // 简体中文
  Zh = 'zh', // 繁體中文
  Korean = 'ko', // 韩语
}

export const LanguageActions: { text: string; key: ELanguage }[] = [
  { text: '简体中文', key: ELanguage.ZhHans },
  { text: '繁體中文', key: ELanguage.Zh },
  { text: 'English', key: ELanguage.English },
  { text: '한국인', key: ELanguage.Korean },
]

export enum EHomeName {
  TopHits = '热门好剧',
  MustSees = '必看好剧',
  Trending = '当前热播',
  HiddenGems = '精彩剧集',
}

export const ColumnNameRoute = {
  [EHomeName.TopHits]: 'top-hits',
  [EHomeName.MustSees]: 'must-sees',
  [EHomeName.Trending]: 'trending',
  [EHomeName.HiddenGems]: 'hidden-gems',
}

export const ColumnNameRouteReversion = {
  'top-hits': EHomeName.TopHits,
  'must-sees': EHomeName.MustSees,
  'trending': EHomeName.Trending,
  'hidden-gems': EHomeName.HiddenGems,
}
