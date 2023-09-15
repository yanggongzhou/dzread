import { ELanguage, IBookItem } from "@/typings/home.interface";

export interface INetBookReq {
  bookId: string;
  language?: ELanguage;
}

export interface INetBookRes extends IBookItem{
  book: IBookItem;
  recommends: IBookItem[];
  chapter: {
    id: string;
    name: string;
  };
  column: {
    bookId: string;
    bookName: string;
    columnName: string;
  };
  languages: ELanguage[]
}





export interface IChapterListItem {
  chapterName: string;
  id: string;
  isCharge: boolean;
}


export interface INetChapterDetailRes extends IChapterListItem {
  bookInfo: IBookItem;
  chapterIndex: number;
  content: string;
  lastFreeChapterId: string;
  nextChapter?: IChapterListItem;
  preChapter?: IChapterListItem;
  position: EnumPosition;
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
