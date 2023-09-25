import { IBookItem } from "@/typings/home.interface";

export const TDK = {
  chapter: {
    title: 'DramaBox-短剧-追剧-电视剧app-精彩故事',
    keywords: 'DramaBox,DramaBox app',
    description: '热播爽剧追不停，随时随地嗨翻天！我们为您提供丰富多彩的精选和持续更新的短剧作品，总有精彩的内容吸引您！'
  },
  index: {
    title: 'DramaBox-短剧-追剧-电视剧app-精彩故事',
    keywords: 'DramaBox,DramaBox app',
    description: '热播爽剧追不停，随时随地嗨翻天！我们为您提供丰富多彩的精选和持续更新的短剧作品，总有精彩的内容吸引您！'
  },
  browse: ({ typeTwoName = '', page = '1' }) => {
    if (page === '1') {
      return {
        title: `${typeTwoName}短剧-${typeTwoName}短剧排行榜-DramaBox`,
        keywords: `DramaBox${typeTwoName}短剧,${typeTwoName}短剧排行榜`,
        description: `DramaBox${typeTwoName}短剧,${typeTwoName}短剧排行榜,DramaBox提供热门${typeTwoName}短剧，欢迎在线观看`
      }
    }
    return {
      title: `${typeTwoName}短剧-${typeTwoName}短剧排行榜-第${page}页-DramaBox`,
      keywords: `${typeTwoName}短剧`,
      description: `${typeTwoName}短剧`
    }
  },
  more: ({ positionName = '', page = '1'}) => {
    if (page === '1') {
      return {
        title: `${positionName}短剧-${positionName}短剧排行榜-DramaBox`,
        keywords: `DramaBox${positionName}短剧,${positionName}短剧排行榜`,
        description: `DramaBox${positionName}短剧,${positionName}短剧排行榜,DramaBox提供热门${positionName}短剧，欢迎在线观看`
      }
    }
    return {
      title: `${positionName}短剧-${positionName}短剧排行榜-第${page}页-DramaBox`,
      keywords: `${positionName}全部短剧`,
      description: `${positionName}全部短剧`
    }
  },
  book: ({ bookInfo = {} as IBookItem }: { bookInfo: IBookItem}) => {
    const { bookName = '', introduction = '' } = bookInfo
    return {
      title: `${bookName}短剧-DramaBox`,
      keywords: `${bookName}, ${bookName}短剧`,
      description: `${bookName}短剧 ${introduction.slice(0, 200)}...`
    }
  },
  download: {
    title: 'DramaBox app下载-DramaBox',
    keywords: 'DramaBox app下载',
    description: 'DramaBox app下载'
  },
  error404: {
    title: '404-DramaBox',
    keywords: '',
    description: 'The Current Short Film Does Not Exist'
  },
  error500: {
    title: '500-DramaBox',
    keywords: '',
    description: '',
  }
}
