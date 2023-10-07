
export interface INetHome {
  channels?: ISectionItem;
  section: ISectionItem[];
  channelId: string;
}

export interface ISectionItem {
  id: string;
  title: string;
  template: string;
  counter: number;
  action?: ISectionAction; // 点击动作的数据
  items?: IItems;
  type: ESectionType;
}

export enum ESectionType {
  频道栏目 = 'pd',
  banner = 'bn',
  分类 = 'fl',
  书籍 = 'sj'
}

export interface IItems {
  itemMark?: string; // 单个item对应的id
  id: string;
  type: string;





}

interface ISectionAction {
  title?: string;
  pType?: string;
  dataId?: string;
  url?: string;
  sucName?: string;
  type: EActionType;
}

export enum EActionType {
  不可点击,
  url,
  请求二级接口,
  书籍,
  进阅读器,
  领书,
  加载分页
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
