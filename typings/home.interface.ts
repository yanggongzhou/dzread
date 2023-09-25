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
